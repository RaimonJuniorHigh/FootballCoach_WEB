import { useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Plus } from 'lucide-react'
import Sidebar, { navItems } from './Sidebar.jsx'
import Header from './Header.jsx'
import Greeting from './Greeting.jsx'
import TodayDateTime from './TodayDateTime.jsx'

// Pages that are not in the nav, with their header title
const otherPages = [
  { id: 'account', path: '/account', label: 'Account' },
  { id: 'account-assistant', path: '/account/assistent', label: 'Wat de assistent kan zien' },
  { id: 'account-handover', path: '/account/team-overdragen', label: 'Team overdragen' },
  { id: 'account-delete', path: '/account/teamgegevens-verwijderen', label: 'Teamgegevens verwijderen' },
]

// The app shell: sidebar + header + the current page (Outlet)
export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Which page are we on? Read it from the URL.
  const current = [...navItems, ...otherPages].find((page) => page.path === location.pathname) ?? {
    id: 'not-found',
    label: 'Pagina niet gevonden',
  }

  const active = current.id

  return (
    <div className="flex h-screen">
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          title={active === 'today' ? <Greeting /> : current.label}
          onOpenMenu={() => setMobileOpen(true)}
        >
          {active === 'sessions' && (
            <button onClick={() => console.log('nieuwe sessie')} className="btn btn-primary btn-lg">
              <Plus size={16} />
              Nieuwe trainingssessie
            </button>
          )}
          {active === 'today' && <TodayDateTime />}
        </Header>

        <main className="flex-1 overflow-y-auto px-page pb-page">
          <Outlet />
        </main>
      </div>
    </div>
  )
}