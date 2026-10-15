import type { Metadata } from 'next'
import { getContactInfo } from '@/lib/cosmic'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact | Anjal',
  description: 'Get in touch with Anjal for collaboration or opportunities.',
}

export default async function ContactPage() {
  const contact = await getContactInfo()

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="rounded-3xl bg-gray-900 dark:bg-gray-950 py-16 px-6">
        <ContactSection contact={contact} />
      </div>
    </div>
  )
}