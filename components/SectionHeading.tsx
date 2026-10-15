interface SectionHeadingProps {
  eyebrow?: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
    </div>
  )
}