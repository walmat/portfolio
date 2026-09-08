import { getAllProjects, type ProjectFrontmatter } from "@/lib/projects";
import { getAllBlogs, type BlogFrontmatter } from "@/lib/blogs";
import { capabilities, ORIGIN_TOKEN, profile, sortProjects } from "@/lib/resume";

function capabilitySection(): string {
  return capabilities.map(({ area, detail }) => `- **${area}.** ${detail}`).join("\n");
}

function projectSection(projects: ProjectFrontmatter[]): string {
  return sortProjects(projects)
    .map((project) => {
      const links = [
        `[Write-up](${ORIGIN_TOKEN}/projects/${project.slug})`,
        ...(project.links ?? []).map(({ label, href }) => `[${label}](${href})`),
      ].join(" · ");

      const { resume } = project;
      const heading = resume ? `### ${resume.role} — ${project.name}` : `### ${project.name}`;
      const body = resume
        ? [
            ...(resume.period ? [`*${resume.period}*`, ""] : []),
            resume.summary ?? project.description,
            ...(resume.highlights?.length
              ? ["", resume.highlights.map((line) => `- ${line}`).join("\n")]
              : []),
          ]
        : [project.description];

      return [heading, "", ...body, "", links].join("\n");
    })
    .join("\n\n");
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Read off the string rather than through Date, so a UTC-midnight ISO date
// doesn't slide back a day for anyone west of Greenwich.
function formatDate(iso: string): string {
  const [year, month, day] = iso.slice(0, 10).split("-");
  const name = MONTHS[Number(month) - 1];
  return name ? `${name} ${Number(day)}, ${year}` : iso;
}

function writingSection(blogs: BlogFrontmatter[]): string {
  return blogs
    .map((blog) =>
      [
        `### ${blog.title}`,
        "",
        `*${formatDate(blog.date)}*`,
        "",
        blog.description,
        "",
        `[Read it](${ORIGIN_TOKEN}/blog/${blog.slug})`,
      ].join("\n"),
    )
    .join("\n\n");
}

export async function buildResumeMarkdown(): Promise<string> {
  const [projects, blogs] = await Promise.all([getAllProjects(), getAllBlogs()]);

  const contact = [
    `[${profile.email}](mailto:${profile.email})`,
    ...profile.links.map(({ label, href }) => `[${label}](${href})`),
  ].join(" · ");

  const sections = [
    `# ${profile.name}`,
    "",
    `**${profile.headline}**`,
    "",
    contact,
    "",
    "## About",
    "",
    profile.summary,
    "",
    "## Systems",
    "",
    capabilitySection(),
    "",
    "## Work",
    "",
    projectSection(projects),
  ];

  if (blogs.length > 0) {
    sections.push("", "## Writing", "", writingSection(blogs));
  }

  return `${sections.join("\n").trim()}\n`;
}
