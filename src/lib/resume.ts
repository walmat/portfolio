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
  // Kept separate from the home-page bio on purpose. A resume has to agree with
  // the dates underneath it.
  summary:
    "I build and run the systems an organization depends on: the record of who it deals with, the data model underneath it, the integrations feeding it, and the reporting that comes out. Currently the founding engineer at Omnia Insurance Group.",
  email: "matthew.wallt@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/walmat" },
    { label: "LinkedIn", href: "https://linkedin.com/in/walmat" },
  ],
};

// The systems half of the job, which project blurbs bury. Every line here maps
// to something shipped and is phrased the way the people hiring for it say it.
export const capabilities: { area: string; detail: string }[] = [
  {
    area: "CRM administration",
    detail:
      "Ran a self-hosted CRM as an organization's system of record — user and role administration, custom objects and fields, validation, and staged environments for testing before release.",
  },
  {
    area: "Data modeling",
    detail:
      "Built an admin-facing data-model editor so staff can add objects and fields themselves and have them appear in forms, search, and reporting without an engineer or a deploy.",
  },
  {
    area: "Migration and mapping",
    detail:
      "Designed a canonical data model that incoming records from third-party systems map onto, with a CSV import path for the systems that offer no API.",
  },
  {
    area: "Integrations",
    detail:
      "Built and maintained integrations across telephony, email, payments, analytics, and storage providers, including the webhook sync between the CRM and the platform.",
  },
  {
    area: "Access and permissions",
    detail:
      "Multi-tenant access model with role tiers, invitations, onboarding and offboarding, and per-record scoping that returns nothing rather than too much when a rule is missed.",
  },
  {
    area: "Reporting",
    detail:
      "Reports, dashboards, and reconciliation runs that turn hundreds of rows into the handful of decisions somebody actually has to make.",
  },
  {
    area: "Data governance",
    detail:
      "Consent tracking, contact-time rules, and multi-year retention built to TCPA, CMS, and HIPAA requirements, enforced in the system rather than in policy documents.",
  },
  {
    area: "Documentation and support",
    detail:
      "Architecture decision records and standard operating procedures, and a track record of using support-ticket volume to decide what gets fixed next.",
  },
];

// Newest work first. Anything not listed here falls to the end, alphabetically.
export const projectOrder = ["omnia", "whim", "rainbow", "recur", "tigerbob", "nebula"];

export function sortProjects(projects: ProjectFrontmatter[]): ProjectFrontmatter[] {
  const rank = (slug: string) => {
    const index = projectOrder.indexOf(slug);
    return index === -1 ? projectOrder.length : index;
  };

  return [...projects].sort((a, b) => rank(a.slug) - rank(b.slug) || a.slug.localeCompare(b.slug));
}
