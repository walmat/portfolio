import { Project } from 'components'
import { PageLayout } from 'layouts'
import { projects, Project as ProjectProps } from 'meta'
import { NextPageContext } from 'next'

export default function ProjectPage(project: ProjectProps) {
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
