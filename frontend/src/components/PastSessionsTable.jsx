import { ChevronRight } from 'lucide-react'
import { formatDate } from '../lib/dates.js'

// Table of past trainings. Rows are clickable; the title is also a button for keyboard users.
export default function PastSessionsTable({ sessions, onOpen }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left">
        <thead className="text-sm text-muted">
          <tr>
            <th scope="col" className="px-5 py-3 font-semibold">Datum</th>
            <th scope="col" className="px-5 py-3 font-semibold">Training</th>
            <th scope="col" className="px-5 py-3 font-semibold">Focus</th>
            <th scope="col" className="px-5 py-3 font-semibold">Duur</th>
            <th scope="col" className="px-5 py-3 font-semibold">Spelers</th>
            <th scope="col" className="w-0 px-5 py-3">
              <span className="sr-only">Openen</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-divider border-t border-divider">
          {sessions.map((s) => (
            <tr
              key={s.id}
              onClick={() => onOpen(s.id)}
              className="cursor-pointer transition-colors hover:bg-row-hover"
            >
              <td className="px-5 py-4 text-sm whitespace-nowrap text-muted">{formatDate(s.date)}</td>
              <td className="px-5 py-4">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    onOpen(s.id)
                  }}
                  className="rounded-sm text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  {s.title}
                </button>
              </td>
              <td className="px-5 py-4">
                <span className="pill bg-line font-medium text-body">{s.focus}</span>
              </td>
              <td className="px-5 py-4 text-sm whitespace-nowrap text-muted">{s.duration} min</td>
              <td className="px-5 py-4 text-sm text-muted">{s.players}</td>
              <td className="px-5 py-4">
                <ChevronRight size={18} aria-hidden="true" className="text-muted" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}