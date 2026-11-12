import { CalendarDays, Clock, Users } from 'lucide-react'

// Status -> badge styles. Write full class names out: Tailwind can't see
// classes you build with strings like `bg-${color}`.
const statusStyles = {
  planned: { label: 'Gepland', className: 'bg-mint text-pitch' },
  draft:   { label: 'Concept', className: 'bg-amber-soft text-amber' },
  ai:      { label: 'AI-voorstel', className: 'bg-ai text-ai-text' },
}

export default function SessionCard({ title, focus, date, duration, players, status, onOpen }) {
  const badge = statusStyles[status] ?? statusStyles.planned

  return (
    <article className="card flex flex-col gap-4 p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold tracking-tight text-ink">{title}</h3>
        <span className={`pill shrink-0 ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      <span className="pill self-start bg-line font-medium text-body">
        {focus}
      </span>

      <div className="flex flex-wrap gap-4 text-sm text-muted">
        <span className="flex items-center gap-1.5"><CalendarDays size={16} />{date}</span>
        <span className="flex items-center gap-1.5"><Clock size={16} />{duration} min</span>
        <span className="flex items-center gap-1.5"><Users size={16} />{players} spelers</span>
      </div>

      <button onClick={onOpen} className="btn btn-secondary mt-auto self-start">
        Bekijk training
      </button>
    </article>
  )
}