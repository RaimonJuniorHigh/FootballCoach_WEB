import { Link, useNavigate } from 'react-router'
import Avatar from './Avatar.jsx'
import { positions } from '../constants/positions.js'

// Provisional labels: the meaning of these statuses is still to be decided with the team
const statusLabels = {
  in: 'Beschikbaar',
  out: 'Afwezig',
  stalled: 'Stagneert',
  review: 'Evalueren',
}

export default function PlayersTable({ players }) {
  const navigate = useNavigate()

  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left">
        <thead className="text-sm text-muted">
          <tr>
            <th scope="col" className="px-card py-3 font-semibold">Speler</th>
            <th scope="col" className="px-card py-3 font-semibold">Positie</th>
            <th scope="col" className="px-card py-3 font-semibold">Open punten</th>
            <th scope="col" className="px-card py-3 font-semibold">Aanwezigheid</th>
            <th scope="col" className="px-card py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-divider border-t border-divider">
          {players.map((p) => (
            <tr
              key={p.id}
              onClick={() => navigate(`/team/${p.id}`)}
              className="cursor-pointer transition-colors hover:bg-row-hover"
            >
              <td className="px-card py-3">
                <div className="flex items-center gap-3">
                  <Avatar initials={p.initials} />
                  <Link
                    to={`/team/${p.id}`}
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    {p.name}
                  </Link>
                </div>
              </td>
              <td className="px-card py-3 text-sm text-muted">{positions[p.position]?.label}</td>
              <td className="px-card py-3 text-sm text-muted">{p.openPoints}</td>
              <td className="px-card py-3 text-sm text-muted">{p.attendance}%</td>
              <td className="px-card py-3">
                <span className="pill bg-line font-medium text-muted">{statusLabels[p.status]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
