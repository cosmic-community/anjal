import type { ContactInfo } from '@/types'

interface ContactSectionProps {
  contact: ContactInfo | null
}

export default function ContactSection({ contact }: ContactSectionProps) {
  const name = contact?.metadata?.full_name || 'Anjal'
  const email = contact?.metadata?.email
  const githubUrl = contact?.metadata?.github_url
  const linkedinUrl = contact?.metadata?.linkedin_url
  const availableForWork = contact?.metadata?.available_for_work

  return (
    <div className="text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-2">
        Get in Touch
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s build something together</h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        {availableForWork
          ? `${name} is currently available for new opportunities. Reach out via email or connect on social.`
          : `Feel free to reach out to ${name} via email or connect on social.`}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 font-medium transition-colors"
          >
            ✉️ {email}
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 font-medium transition-colors"
          >
            GitHub
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 font-medium transition-colors"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}