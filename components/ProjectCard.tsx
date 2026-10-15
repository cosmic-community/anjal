import Link from 'next/link'
import type { Project } from '@/types'
import TechStackChips from './TechStackChips'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return null

  const cover = project.metadata?.screenshots?.[0]
  const techStack = project.metadata?.tech_stack || []

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {cover ? (
          <img
            src={`${cover.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🚀</div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>
        {project.metadata?.short_description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {project.metadata.short_description}
          </p>
        )}
        {techStack.length > 0 && <TechStackChips skills={techStack.slice(0, 4)} />}
      </div>
    </Link>
  )
}