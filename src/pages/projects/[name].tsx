import { Project } from 'components'
import { PageLayout } from 'layouts'
import { projects } from 'meta'
import { NextPageContext } from 'next'

interface ProjectPageProps {
  title: string
  name: string
  description: string
}

export default function ProjectPage(project: ProjectPageProps) {
  return (
    <PageLayout
      title={`mtw. ${project.title}`}
      description={project.description}
    >
      <Project {...project} />
    </PageLayout>
  )
}

ProjectPage.getInitialProps = ({ query: { name } }: NextPageContext) => {
  if (!name || typeof name !== 'string' || !projects[name]) {
    return {
      notFound: true
    }
  }

  return { ...projects[name] }
}
