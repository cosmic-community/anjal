import type { Metadata } from 'next'
import { getAllWorkExperience } from '@/lib/cosmic'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Work Experience | Anjal',
  description: 'A timeline of professional roles and experience.',
}

export default async function WorkExperiencePage() {
  const experience = await getAllWorkExperience()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="Career" title="Work Experience" />
      {experience.length > 0 ? (
        <ExperienceTimeline experience={experience} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-6">
          No work experience listed yet.
        </p>
      )}
    </div>
  )
}