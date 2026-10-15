import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import SkillBadge from './SkillBadge'

interface SkillsSectionProps {
  skills: Skill[]
}

const categoryOrder = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools']

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null

  const grouped: Record<string, Skill[]> = {}

  skills.forEach((skill) => {
    if (!skill) return
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  })

  const allCategories = [
    ...categoryOrder.filter((cat) => {
      const items = grouped[cat]
      return items && items.length > 0
    }),
    ...Object.keys(grouped).filter((cat) => !categoryOrder.includes(cat)),
  ]

  return (
    <div className="space-y-12 mt-6">
      {allCategories.map((category) => {
        const items = grouped[category]

        if (!items || items.length === 0) {
          return null
        }

        return (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}