import type { WorkExperience } from '@/types'
import TechStackChips from './TechStackChips'

interface ExperienceItemProps {
  experience: WorkExperience
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  if (!experience) return null

  const {
    company,
    role,
    company_logo,
    start_date,
    current_role,
    end_date,
    description,
    technologies,
  } = experience.metadata

  const startLabel = formatDate(start_date)
  const endLabel = current_role ? 'Present' : formatDate(end_date) || 'Present'
  const dateRange = startLabel ? `${startLabel} — ${endLabel}` : endLabel

  return (
    <div className="relative pl-8">
      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-950" />

      <div className="flex items-start gap-4 mb-2 flex-wrap">
        {company_logo && company_logo.imgix_url && (
          <img
            src={`${company_logo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={company || experience.title}
            width={48}
            height={48}
            className="rounded-lg border border-gray-200 dark:border-gray-800 object-cover flex-shrink-0"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{role || experience.title}</h3>
          {company && <p className="text-gray-600 dark:text-gray-400 font-medium">{company}</p>}
          <p className="text-sm text-gray-500 dark:text-gray-500">{dateRange}</p>
        </div>
        {current_role && (
          <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium whitespace-nowrap">
            Current
          </span>
        )}
      </div>

      {description && (
        <div
          className="prose prose-sm prose-gray dark:prose-invert max-w-none mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {Array.isArray(technologies) && technologies.length > 0 && (
        <div className="mt-4">
          <TechStackChips
            skills={technologies.filter(
              (tech) => tech && typeof tech === 'object'
            )}
          />
        </div>
      )}
    </div>
  )
}