import { CalendarDays, House, ListChecks, Sparkles, Users, X } from 'lucide-react'
import { coach } from '../data/mockData.js'

// The menu. "soon" shows a small lime label for pages that are not built yet.
export const navItems = [
  { id: 'today', label: 'Vandaag', icon: House, path: '/' },
  { id: 'squad', label: 'Team', icon: Users, path: '/team' },
  { id: 'sessions', label: 'Trainingssessies', icon: CalendarDays, path: '/trainingen' },
  { id: 'drills', label: 'Oefeningen', icon: ListChecks, path: '/oefeningen' },
  { id: 'assistant', label: 'AI Assistant', icon: Sparkles, path: '/ai-assistent', soon: true },
]

export default function Sidebar({ active, onSelect, mobileOpen, onCloseMobile }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onCloseMobile}
        className={`fixed inset-0 z-30 bg-overlay transition-opacity lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-sidebar flex-col border-r border-sidebar-border bg-sidebar px-4 pb-6 text-sidebar-text transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0`}
      >
        {/* Club logo + team */}
        <div className="flex h-topbar items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-meta font-extrabold text-brand-light">
              {coach.clubInitials}
            </div>
            <div>
              <div className="font-bold tracking-tight text-sidebar-heading">{coach.club}</div>
              <div className="text-meta text-muted">{coach.team}</div>
            </div>
          </div>
          <button
            onClick={onCloseMobile}
            className="rounded-full p-1.5 hover:bg-sidebar-hover lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon, soon }) => (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className={`flex w-full items-center gap-3 rounded-full px-4 py-3 text-nav font-semibold transition-colors ${
                active === id ? 'bg-brand text-on-brand' : 'hover:bg-sidebar-hover'
              }`}
            >
              <Icon size={16} strokeWidth={1.75} className="shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {soon && (
                <span className="pill bg-ai text-ai-text">Soon</span>
              )}
            </button>
          ))}
        </nav>

        {/* Coach profile */}
        <button
          onClick={() => onSelect('account')}
          className={`flex items-center gap-3 rounded-card p-2 text-left transition-colors ${
            active === 'account' ? 'bg-card' : 'hover:bg-sidebar-hover'
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-avatar text-xs font-bold text-body">
            {coach.initials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-sidebar-heading">{coach.name}</div>
            <div className="truncate text-xs text-muted">{coach.role}</div>
          </div>
        </button>
      </aside>
    </>
  )
}
