import { CalendarDays, Clock, Users } from 'lucide-react'
import { formatDate } from '../lib/dates.js'

// Status -> badge styles. Write full class names out: Tailwind can't see
// classes you build with strings like `bg-${color}`.
const statusStyles = {
  planned: { label: 'Gepland', className: 'bg-mint text-pitch' },
  draft: { label: 'Concept', className: 'bg-amber-soft text-amber' },
  ai: { label: 'AI-voorstel', className: 'bg-ai text-ai-text' },
  empty: { label: 'Leeg', className: 'bg-line text-muted' },
}

export default function SessionCard({ title, focus, date, duration, players, status, onOpen, onCreate }) {
  const badge = statusStyles[status] ?? statusStyles.planned
  const isEmpty = status === 'empty'

  return (
    <article className="card flex flex-col gap-4 p-card transition-shadow hover:shadow-md">
      {/* What */}
      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-lg font-bold tracking-tight ${isEmpty ? 'text-muted' : 'text-ink'}`}>
          {isEmpty ? 'Nog niet voorbereid' : title}
        </h3>
        <span className={`pill shrink-0 ${badge.className}`}>
          {badge.label}
        </span>
      </div>

      {/* When: always directly under the title, so it lines up across cards */}
      <div className="flex flex-wrap gap-4 text-sm text-muted">
        <span className="flex items-center gap-1.5"><CalendarDays size={16} />{formatDate(date)}</span>
        {!isEmpty && duration != null && (
          <span className="flex items-center gap-1.5"><Clock size={16} />{duration} min</span>
        )}
        {!isEmpty && players != null && (
          <span className="flex items-center gap-1.5"><Users size={16} />{players} spelers</span>
        )}
      </div>

      {/* About what */}
      {focus && (
        <span className="pill self-start bg-line font-medium text-body">
          {focus}
        </span>
      )}

      {/* Action */}
      {isEmpty ? (
        <button onClick={onCreate} className="btn btn-secondary mt-auto self-start">
          Training invullen
        </button>
      ) : (
        <button onClick={onOpen} className="btn btn-secondary mt-auto self-start">
          Training bekijken
        </button>
      )}
    </article>
  )
}