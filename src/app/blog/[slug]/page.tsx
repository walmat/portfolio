import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { BlogWrapper } from "@/components/BlogWrapper";
import { mdxComponents } from "@/components/mdx";
import { BlogLayout } from "@/layouts/blog";
import { getBlogBySlug, getAllBlogSlugs, getBlogNavigation } from "@/lib/blogs";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = await getBlogBySlug(slug);

    return {
      title: `mtw. ${frontmatter.title}`,
      description: frontmatter.description,
      openGraph: {
        title: `mtw. ${frontmatter.title}`,
        description: frontmatter.description,
      },
    };
  } catch {
    notFound();
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  try {
    const { frontmatter, content } = await getBlogBySlug(slug);
    const navigation = await getBlogNavigation(slug);

    return (
      <BlogLayout>
        <BlogWrapper frontmatter={frontmatter} navigation={navigation}>
          <MDXRemote source={content} components={mdxComponents} />
        </BlogWrapper>
      </BlogLayout>
    );
  } catch {
    notFound();
  }
}
