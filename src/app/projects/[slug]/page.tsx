import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { ProjectWrapper } from '@/components/ProjectWrapper'
import { mdxComponents } from '@/components/mdx'
import { PageLayout } from '@/layouts/page'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const { frontmatter } = await getProjectBySlug(slug)

    return {
      title: `mtw. ${frontmatter.title}`,
      description: frontmatter.description,
      openGraph: {
        title: `mtw. ${frontmatter.title}`,
        description: frontmatter.description
      }
    }
  } catch {
    notFound()
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const { frontmatter, content } = await getProjectBySlug(slug)

  return (
    <PageLayout
      title={`mtw. ${frontmatter.title}`}
      description={frontmatter.description}
    >
      <ProjectWrapper frontmatter={frontmatter}>
        <MDXRemote source={content} components={mdxComponents} />
      </ProjectWrapper>
    </PageLayout>
  )
}
