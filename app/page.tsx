import Link from 'next/link'
import type { Metadata } from 'next'
import {
  getContactInfo,
  getFeaturedProjects,
  getAllSkills,
  getAllWorkExperience,
} from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import SkillsSection from '@/components/SkillsSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ContactSection from '@/components/ContactSection'
import SectionHeading from '@/components/SectionHeading'

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactInfo()
  const name = contact?.metadata?.full_name || 'Anjal'
  const headline = contact?.metadata?.headline || 'Creative Developer Portfolio'
  return {
    title: `${name} | ${headline}`,
    description: headline,
  }
}

export default async function HomePage() {
  const [contact, featuredProjects, skills, experience] = await Promise.all([
    getContactInfo(),
    getFeaturedProjects(),
    getAllSkills(),
    getAllWorkExperience(),
  ])

  return (
    <>
      <Hero contact={contact} />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        {featuredProjects.length > 0 ? (
          <ProjectsGrid projects={featuredProjects} />
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-6">
            No featured projects yet. Check back soon.
          </p>
        )}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-200"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />
          {skills.length > 0 ? (
            <SkillsSection skills={skills} />
          ) : (
            <p className="text-gray-500 dark:text-gray-400 mt-6">No skills listed yet.</p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Career" title="Work Experience" />
        {experience.length > 0 ? (
          <ExperienceTimeline experience={experience} />
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-6">
            No work experience listed yet.
          </p>
        )}
      </section>

      <section className="bg-gray-900 dark:bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ContactSection contact={contact} />
        </div>
      </section>
    </>
  )
}