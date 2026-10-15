import type { ContactInfo } from '@/types'

interface HeroProps {
  contact: ContactInfo | null
}

export default function Hero({ contact }: HeroProps) {
  const name = contact?.metadata?.full_name || 'Anjal'
  const headline = contact?.metadata?.headline || 'Creative Developer'
  const location = contact?.metadata?.location
  const availableForWork = contact?.metadata?.available_for_work
  const githubUrl = contact?.metadata?.github_url
  const linkedinUrl = contact?.metadata?.linkedin_url
  const email = contact?.metadata?.email

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-28 sm:py-36">
        {availableForWork && (
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </span>
        )}

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Hi, I&apos;m {name} <span className="inline-block">👋</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
          {headline}
        </p>

        {location && (
          <p className="text-gray-500 dark:text-gray-400 mb-8 flex items-center gap-2">
            📍 {location}
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              ✉️ Email Me
            </a>
          )}
        </div>
      </div>
    </section>
  )
}