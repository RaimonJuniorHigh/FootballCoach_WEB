import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { Plus } from 'lucide-react'
import Sidebar, { navItems } from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Greeting from './components/Greeting.jsx'
import TodayDateTime from './components/TodayDateTime.jsx'
import SessionsPage from './components/SessionsPage.jsx'

// Temporary page for routes that are not built yet
function Placeholder({ label }) {
  return <div className="card p-8 text-muted">{label} content goes here.</div>
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Which page are we on? Read it from the URL.
  const current =
    navItems.find((item) => item.path === location.pathname) ??
    (location.pathname === '/account'
      ? { id: 'account', label: 'Account' }
      : { id: 'not-found', label: 'Pagina niet gevonden' })

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
          <Routes>
            <Route path="/" element={<Placeholder label="Vandaag" />} />
            <Route path="/team" element={<Placeholder label="Team" />} />
            <Route path="/trainingen" element={<SessionsPage />} />
            <Route path="/oefeningen" element={<Placeholder label="Oefeningen" />} />
            <Route path="/ai-assistent" element={<Placeholder label="AI Assistant" />} />
            <Route path="/account" element={<Placeholder label="Account" />} />
            <Route path="*" element={<Placeholder label="Deze pagina bestaat niet" />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}