import Main from "@/components/Main";
import { PageLayout } from "@/layouts/page";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <PageLayout
      title="mtw."
      description="An aspiring homesteader and avid believer that each individual can change the world."
    >
      <Main projects={projects} />
    </PageLayout>
  );
}
