import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/cosmic'
import ProjectsGrid from '@/components/ProjectsGrid'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Projects | Anjal',
  description: 'Explore all projects built by Anjal, including tech stacks, live demos, and source code.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="Portfolio" title="All Projects" />
      {projects.length > 0 ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-6">No projects found.</p>
      )}
    </div>
  )
}