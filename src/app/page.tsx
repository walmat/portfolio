import Main from "@/components/Main";
import { PageLayout } from "@/layouts/page";
import { getAllProjects } from "@/lib/projects";
import { getLatestBlog } from "@/lib/blogs";

export default async function Home() {
  const [projects, latestBlog] = await Promise.all([getAllProjects(), getLatestBlog()]);

  return (
    <PageLayout
      title="mtw."
      description="An aspiring homesteader and avid believer that each individual can change the world."
    >
      <Main projects={projects} latestBlog={latestBlog} />
    </PageLayout>
  );
}
