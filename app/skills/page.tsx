import type { Metadata } from 'next'
import { getAllSkills } from '@/lib/cosmic'
import SkillsSection from '@/components/SkillsSection'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Skills | Anjal',
  description: 'Technical skills and tools across frontend, backend, database, devops, and more.',
}

export default async function SkillsPage() {
  const skills = await getAllSkills()

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow="Toolbox" title="Skills & Technologies" />
      {skills.length > 0 ? (
        <SkillsSection skills={skills} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-6">No skills listed yet.</p>
      )}
    </div>
  )
}