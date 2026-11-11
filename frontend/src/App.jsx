import { useState } from 'react'
import { Plus } from 'lucide-react'
import Sidebar, { navItems } from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
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
        <Header title={current?.label} onOpenMenu={() => setMobileOpen(true)}>
          {active === 'sessions' && (
            <button onClick={() => console.log('nieuwe sessie')} className="btn-primary">
              <Plus size={16} />
              Nieuwe trainingssessie
            </button>
          )}
        </Header>

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