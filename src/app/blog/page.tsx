import { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";

import { PageLayout } from "@/layouts/page";
import { getAllBlogs } from "@/lib/blogs";
import { Arrow } from "@/components";

export const metadata: Metadata = {
  title: "mtw. Blog",
  description: "Thoughts on software engineering, design, and everything in between.",
};

export default async function BlogListingPage() {
  const blogs = await getAllBlogs();

  return (
    <PageLayout
      title="mtw. Blog"
      description="Thoughts on software engineering, design, and everything in between."
    >
      <div className="min-h-screen pt-[120px] pb-16">
        <div className="mx-auto max-w-[320px] md:max-w-[800px] px-0 md:px-8 lg:px-4">
          <header className="mb-12">
            <h1 className="text-4xl leading-[48px] font-normal text-foreground mb-2">Blog</h1>
            <p className="text-[18px] leading-7 tracking-[0.25px] font-normal text-muted-foreground">
              Thoughts on software engineering, design, and everything in between.
            </p>
          </header>

          {blogs.length === 0 ? (
            <p className="text-muted-foreground">No posts yet. Check back soon!</p>
          ) : (
            <div className="flex flex-col gap-6">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group block p-6 rounded-2xl bg-card border-2 border-border hover:bg-muted transition-colors duration-200"
                  style={
                    blog.card?.gradient
                      ? {
                          background: blog.card.gradient,
                          borderColor: "transparent",
                        }
                      : undefined
                  }
                >
                  <article>
                    <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
                      <time dateTime={blog.date}>
                        {format(new Date(blog.date), "MMM dd, yyyy")}
                      </time>
                      {blog.featured && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-secondary">
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-medium text-foreground mb-2 group-hover:underline">
                      {blog.title}
                    </h2>
                    <p className="text-[15px] leading-6 text-muted-foreground line-clamp-2">
                      {blog.description}
                    </p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex gap-2 mt-4">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <div className="rotate-180">
                <Arrow />
              </div>
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
