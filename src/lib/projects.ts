import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  style?: Record<string, string>;
}

export interface ProjectCard {
  gradient?: string;
  backgroundColor?: string;
  logoSrc: string;
  darkLogoSrc?: string;
  accentSvg?: string;
  accentStyle?: string;
  rectangleSvg?: string;
  rectangleStyle?: string;
  buttonLabel: string;
}

export interface ProjectFrontmatter {
  title: string;
  name: string;
  description: string;
  slug: string;
  links: ProjectLink[];
  images: Record<string, ProjectImage>;
  card: ProjectCard;
}

export async function getProjectBySlug(
  slug: string,
): Promise<{ frontmatter: ProjectFrontmatter; content: string }> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return { frontmatter: data as ProjectFrontmatter, content };
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const files = fs.readdirSync(PROJECTS_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const slugs = await getAllProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getProjectBySlug(slug);
      return frontmatter;
    }),
  );
  return projects;
}
