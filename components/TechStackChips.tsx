import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TechStackChipsProps {
  skills: Skill[]
}

export default function TechStackChips({ skills }: TechStackChipsProps) {
  if (!skills || skills.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        if (!skill) return null
        const name = skill.metadata?.name || skill.title
        const icon = getMetafieldValue(skill.metadata?.icon)
        return (
          <span
            key={skill.id}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
          >
            {icon && <span>{icon}</span>}
            {name}
          </span>
        )
      })}
    </div>
  )
}