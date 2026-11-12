import { Menu } from 'lucide-react'

export default function Header({ title, onOpenMenu, children }) {
  return (
    <header className="flex h-topbar items-center gap-3 bg-header px-page">
      <button
        onClick={onOpenMenu}
        className="rounded-md p-2 text-header-icon hover:bg-header-hover lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu size={20} />
      </button>

      <h1 className="text-3xl font-bold tracking-tight text-header-text">{title}</h1>

      {/* Page-specific actions (buttons, greeting) go on the right */}
      {children && <div className="ml-auto flex items-center gap-2">{children}</div>}
    </header>
  )
}