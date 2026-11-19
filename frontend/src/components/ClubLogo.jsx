import { club } from '../data/mockData.js'

// Club logo. "inverted" = lime with dark text, for dark backgrounds (login page).
const variants = {
  default: 'bg-brand text-brand-light',
  inverted: 'bg-brand-light text-brand',
}

export default function ClubLogo({ variant = 'default' }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-meta font-extrabold ${variants[variant]}`}
    >
      {club.initials}
    </div>
  )
}