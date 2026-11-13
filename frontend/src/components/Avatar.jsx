// Round initials. Decorative: the name is always shown next to it.
const sizes = {
  sm: 'h-9 w-9 text-xs',
  lg: 'h-16 w-16 text-xl',
}

export default function Avatar({ initials, size = 'sm' }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full bg-avatar font-bold text-avatar-text ${sizes[size]}`}
    >
      {initials}
    </div>
  )
}