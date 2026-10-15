import type { WorkExperience } from '@/types'
import ExperienceItem from './ExperienceItem'

interface ExperienceTimelineProps {
  experience: WorkExperience[]
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  if (!experience || experience.length === 0) return null

  return (
    <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 mt-6 space-y-10">
      {experience.map((item) => (
        <ExperienceItem key={item.id} experience={item} />
      ))}
    </div>
  )
}