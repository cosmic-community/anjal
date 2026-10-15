import type { CosmicFile } from '@/types'

interface ScreenshotGalleryProps {
  screenshots: CosmicFile[]
  title: string
}

export default function ScreenshotGallery({ screenshots, title }: ScreenshotGalleryProps) {
  if (!screenshots || screenshots.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {screenshots.map((shot, index) => {
        if (!shot || !shot.imgix_url) return null
        return (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            <img
              src={`${shot.imgix_url}?w=1200&h=750&fit=crop&auto=format,compress`}
              alt={`${title} screenshot ${index + 1}`}
              width={1200}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}