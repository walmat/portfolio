"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Arrow, Heading, Button, Paragraph } from "@/components";
import { useCardOpacity } from "@/hooks";
import type { BlogFrontmatter } from "@/lib/blogs";

const DateComponent = ({ date }: { date: string }) => {
  try {
    return (
      <p className="text-sm leading-6 tracking-[0.25px] font-normal text-muted-foreground">
        {format(new Date(date), "MMM dd, yyyy")}
      </p>
    );
  } catch {
    return null;
  }
};

export const BlogFallback = () => {
  return (
    <div className="h-full w-full flex flex-col items-start justify-between p-9 px-[42px] rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)]">
      <div className="w-full">
        <div className="mb-2">
          <div className="h-8 w-3/4 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-5 w-full bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-5 w-full bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-5 w-2/3 bg-muted-foreground/20 rounded animate-pulse" />
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="h-9 w-9 bg-muted-foreground/20 rounded-full animate-pulse" />
        <div className="h-5 w-24 bg-muted-foreground/20 rounded animate-pulse" />
      </div>
    </div>
  );
};

interface BlogContentProps {
  blog: BlogFrontmatter;
}

export function BlogContent({ blog }: BlogContentProps) {
  const opacity = useCardOpacity(["Media"]);

  return (
    <div
      style={{ opacity }}
      className="h-full w-full flex flex-col items-start justify-between p-9 px-[42px] rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)]"
    >
      <div className="w-full min-w-0 space-y-2">
        <Heading className="w-full">{blog.title}</Heading>
        <div className="max-h-[124px] md:max-h-[150px] lg:max-h-[180px] xl:max-h-[94px] overflow-hidden relative">
          <Paragraph>{blog.description}</Paragraph>
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-card" />
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <Link href={`/blog/${blog.slug}`}>
          <Button Icon={Arrow}>Read more</Button>
        </Link>
        <DateComponent date={blog.date} />
      </div>
    </div>
  );
}

interface BlogProps {
  blog: BlogFrontmatter | null;
}

function Blog({ blog }: BlogProps) {
  if (!blog) {
    return <BlogFallback />;
  }

  return <BlogContent blog={blog} />;
}

export default Blog;
