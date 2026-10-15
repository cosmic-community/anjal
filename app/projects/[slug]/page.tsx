// app/projects/[slug]/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/cosmic'
import ScreenshotGallery from '@/components/ScreenshotGallery'
import TechStackChips from '@/components/TechStackChips'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found | Anjal' }
  }

  return {
    title: `${project.title} | Anjal`,
    description: project.metadata?.short_description || project.title,
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { short_description, details, screenshots, tech_stack, live_url, repo_url } = project.metadata

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/projects"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-4">{project.title}</h1>

      {short_description && (
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{short_description}</p>
      )}

      <div className="flex flex-wrap gap-4 mb-10">
        {live_url && (
          <a
            href={live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
          >
            🔗 Live Demo
          </a>
        )}
        {repo_url && (
          <a
            href={repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            💻 View Code
          </a>
        )}
      </div>

      {screenshots && screenshots.length > 0 && (
        <div className="mb-12">
          <ScreenshotGallery screenshots={screenshots} title={project.title} />
        </div>
      )}

      {details && (
        <div
          className="prose prose-gray dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: details }}
        />
      )}

      {tech_stack && tech_stack.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <TechStackChips skills={tech_stack} />
        </div>
      )}
    </article>
  )
}