import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SkillBadgeProps {
  skill: Skill
}

const proficiencyWidth: Record<string, string> = {
  Beginner: '35%',
  Intermediate: '60%',
  Advanced: '80%',
  Expert: '100%',
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  if (!skill) return null

  const name = skill.metadata?.name || skill.title
  const icon = getMetafieldValue(skill.metadata?.icon)
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const width = proficiencyWidth[proficiency] || '70%'

  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon || '🔧'}</span>
        <span className="font-semibold">{name}</span>
      </div>
      {proficiency && (
        <>
          <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{ width }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{proficiency}</p>
        </>
      )}
    </div>
  )
}