import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar, { navItems } from './components/Sidebar.jsx'

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
        <header className="flex h-16 items-center gap-3 border-b border-header-border bg-header px-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-md p-2 text-header-icon hover:bg-header-hover lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-semibold text-header-text">{current?.label}</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="rounded-xl border border-dashed border-card-border bg-card p-8 text-text-muted">
            {current?.label} content goes here.
          </div>
        </main>
      </div>
    </div>
  )
}