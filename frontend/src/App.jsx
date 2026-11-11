import { useState } from 'react'
import { Menu, Plus } from 'lucide-react'
import Sidebar, { navItems } from './components/Sidebar.jsx'
import SessionsPage from './components/SessionsPage.jsx'

export default function App() {
  const [active, setActive] = useState('today')
  const [mobileOpen, setMobileOpen] = useState(false)

  // "account" is not in the menu list, so it gets its own title.
  const current = navItems.find((item) => item.id === active) ?? { label: 'Account' }

  return (
    <div className="flex h-screen">
      <Sidebar
        active={active}
        onSelect={(id) => {
          setActive(id)
          setMobileOpen(false)
        }}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center gap-3 bg-header px-page pt-page pb-2">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-2 text-header-icon hover:bg-header-hover lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <h1 className="text-3xl font-bold tracking-tight text-header-text">{current?.label}</h1>

          {active === 'sessions' && (
            <button
              onClick={() => console.log('nieuwe sessie')}
              className="btn-primary ml-auto"
            >
              <Plus size={16} />
              Nieuwe trainingssessie
            </button>
          )}
        </header>

        <main className="flex-1 overflow-y-auto px-page pt-4 pb-page">
          {active === 'sessions' ? (
            <SessionsPage />
          ) : (
            <div className="card border-dashed p-8 text-muted">
              {current?.label} content goes here.
            </div>
          )}
        </main>
      </div>
    </div>
  )
}