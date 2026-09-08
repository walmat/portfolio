import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Resume } from "@/components/Resume";
import { resumeComponents } from "@/components/mdx/resume";
import { PageLayout } from "@/layouts/page";
import { mdxOptions } from "@/lib/mdx-options";
import { profile, withOrigin } from "@/lib/resume";
import { buildResumeMarkdown } from "@/lib/resume-markdown";

const description = `${profile.name} — ${profile.headline}.`;

export const metadata: Metadata = {
  title: "mtw. //resume",
  description,
  openGraph: {
    title: "mtw. //resume",
    description,
  },
};

export default async function ResumePage() {
  const markdown = await buildResumeMarkdown();

  // The page header already carries the name, and relative links work in the
  // browser. The copy and download buttons still hand over the full document.
  const display = withOrigin(markdown, "").replace(/^#\s.*\n+/, "");

  return (
    <PageLayout title="mtw. //resume" description={description}>
      <Resume markdown={markdown}>
        <MDXRemote source={display} components={resumeComponents} options={mdxOptions} />
      </Resume>
    </PageLayout>
  );
}
