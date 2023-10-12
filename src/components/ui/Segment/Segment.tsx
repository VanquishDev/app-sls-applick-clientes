interface PropsSegment {
  title?: string
  description?: string
  notes?: string
}

export default function Segment(props: PropsSegment) {
  const { title, description, notes } = props

  return (
    <div className="mt-10 mb-6 divide-y-6 divide-accent-3 divide-dashed">
      <div className="flex flex-col w-full md:w-auto text-center md:text-left">
        {title && (
          <h2 className="uppercase text-xs text-tertiary-2 tracking-widest font-medium title-font">
            {title}
          </h2>
        )}
        {description && (
          <h1 className="text-2xl font-semibold text-accent-6">
            {description}
          </h1>
        )}
        {notes && <p className="text-xs text-accent-7">{notes}</p>}
      </div>
    </div>
  )
}
