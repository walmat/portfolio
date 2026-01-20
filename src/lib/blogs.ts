import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "src/content/blogs");

export interface BlogImage {
  src: string;
  style?: Record<string, string>;
  className?: string;
}

export interface BlogCard {
  gradient?: string;
  accentColor?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
  hero?: BlogImage;
  images?: Record<string, BlogImage>;
  card?: BlogCard;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface BlogNavigation {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  return { frontmatter: data as BlogFrontmatter, content };
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }
  const files = fs.readdirSync(BLOGS_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
}

export async function getAllBlogs(includeDrafts = false): Promise<BlogFrontmatter[]> {
  const slugs = await getAllBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getBlogBySlug(slug);
      return frontmatter;
    }),
  );

  const filtered = includeDrafts
    ? blogs
    : blogs.filter((blog) => !blog.draft || process.env.NODE_ENV === "development");

  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getLatestBlog(): Promise<BlogFrontmatter | null> {
  const blogs = await getAllBlogs();
  return blogs[0] ?? null;
}

export async function getBlogNavigation(currentSlug: string): Promise<BlogNavigation> {
  const blogs = await getAllBlogs();
  const currentIndex = blogs.findIndex((blog) => blog.slug === currentSlug);

  if (currentIndex === -1) {
    return {};
  }

  const navigation: BlogNavigation = {};

  // prev = older post (next in array since sorted newest first)
  if (currentIndex < blogs.length - 1) {
    const prevBlog = blogs[currentIndex + 1];
    navigation.prev = { slug: prevBlog.slug, title: prevBlog.title };
  }

  // next = newer post (previous in array since sorted newest first)
  if (currentIndex > 0) {
    const nextBlog = blogs[currentIndex - 1];
    navigation.next = { slug: nextBlog.slug, title: nextBlog.title };
  }

  return navigation;
}

export async function getBlogsByTag(tag: string): Promise<BlogFrontmatter[]> {
  const blogs = await getAllBlogs();
  return blogs.filter((blog) => blog.tags?.includes(tag));
}
