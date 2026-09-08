// Client-safe half: no `fs`, so the Resume component can import it.
import type { ProjectFrontmatter } from "@/lib/projects";

// Swapped for the real origin by the client and the API route.
export const ORIGIN_TOKEN = "{{origin}}";

export function withOrigin(markdown: string, origin: string): string {
  return markdown.split(ORIGIN_TOKEN).join(origin.replace(/\/$/, ""));
}

export const profile = {
  name: "Matthew Wall",
  headline: "Founding engineer",
  summary:
    "A founding engineer who loves building products and sweating the small stuff. Currently working on Forkast — AI-powered recipes for near-zero waste.",
  email: "matthew.wallt@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/walmat" },
    { label: "LinkedIn", href: "https://linkedin.com/in/walmat" },
  ],
};

// Newest work first. Anything not listed here falls to the end, alphabetically.
export const projectOrder = ["omnia", "whim", "rainbow", "recur", "tigerbob", "nebula"];

export function sortProjects(projects: ProjectFrontmatter[]): ProjectFrontmatter[] {
  const rank = (slug: string) => {
    const index = projectOrder.indexOf(slug);
    return index === -1 ? projectOrder.length : index;
  };

  return [...projects].sort((a, b) => rank(a.slug) - rank(b.slug) || a.slug.localeCompare(b.slug));
}
