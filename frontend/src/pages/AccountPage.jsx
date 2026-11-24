import { Link } from 'react-router'
import { ChevronRight, LogOut } from 'lucide-react'
import Avatar from '../components/Avatar.jsx'
import { useAuth } from '../auth/AuthContext.jsx'
import { getUserTitle } from '../constants/roles.js'

// How each language code from the database is shown
const languageLabels = {
  nl: 'Nederlands',
  en: 'English',
}

export default function AccountPage() {
  const { user } = useAuth()
  const title = getUserTitle(user)
  const isCoach = user.role === 'coach'

  const details = [
    { label: 'Rol', value: title },
    { label: 'Team', value: user.team },
    { label: 'E-mail', value: user.email },
    { label: 'Meldingen', value: user.notifications ? 'Aan' : 'Uit' },
    { label: 'Taal', value: languageLabels[user.language] },
  ]

  // Team actions are for coaches only
  const privacyLinks = [
    { label: 'Wat de assistent kan zien', to: '/account/assistent' },
    ...(isCoach
      ? [
          { label: 'Team overdragen aan een andere coach', to: '/account/team-overdragen' },
          { label: 'Teamgegevens verwijderen', to: '/account/teamgegevens-verwijderen', danger: true },
        ]
      : []),
  ]

  return (
    <div className="flex max-w-content flex-col gap-3">
      {/* Profile */}
      <section className="card flex items-center gap-5 p-card">
        <Avatar initials={user.initials} size="lg" />
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{user.name}</h2>
          <p className="text-muted">
            {title} · {user.team}
          </p>
        </div>
      </section>

      {/* Details */}
      <dl className="card divide-y divide-divider px-card">
        {details.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4 py-4">
            <dt>{label}</dt>
            <dd className="text-muted">{value}</dd>
          </div>
        ))}
      </dl>

      {/* Privacy */}
      <h2 className="mt-6 text-section-title">Privacy</h2>
      <ul className="card divide-y divide-divider overflow-hidden px-card">
        {privacyLinks.map(({ label, to, danger }) => (
          <li key={to}>
            <Link
              to={to}
              className={`-mx-card flex items-center justify-between gap-4 px-card py-4 transition-colors hover:bg-row-hover
                focus-visible:bg-row-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus
                ${danger ? 'text-danger' : ''}`}
            >
              {label}
              <ChevronRight size={18} className="-mr-1.5 shrink-0 text-muted" />
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/logout" className="btn btn-secondary btn-lg mt-4 self-start">
        <LogOut size={16} />
        Uitloggen
      </Link>
    </div>
  )
}