import { getAllProjects, type ProjectFrontmatter } from "@/lib/projects";
import { getAllBlogs, type BlogFrontmatter } from "@/lib/blogs";
import { ORIGIN_TOKEN, profile, sortProjects } from "@/lib/resume";

function projectSection(projects: ProjectFrontmatter[]): string {
  return sortProjects(projects)
    .map((project) => {
      const links = [
        `[Write-up](${ORIGIN_TOKEN}/projects/${project.slug})`,
        ...(project.links ?? []).map(({ label, href }) => `[${label}](${href})`),
      ].join(" · ");

      return [`### ${project.name}`, "", project.description, "", links].join("\n");
    })
    .join("\n\n");
}

function writingSection(blogs: BlogFrontmatter[]): string {
  return blogs
    .map((blog) => {
      const date = new Date(blog.date).toISOString().slice(0, 10);
      return `- [${blog.title}](${ORIGIN_TOKEN}/blog/${blog.slug}) (${date}) — ${blog.description}`;
    })
    .join("\n");
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
    "## Work",
    "",
    projectSection(projects),
  ];

  if (blogs.length > 0) {
    sections.push("", "## Writing", "", writingSection(blogs));
  }

  return `${sections.join("\n").trim()}\n`;
}
