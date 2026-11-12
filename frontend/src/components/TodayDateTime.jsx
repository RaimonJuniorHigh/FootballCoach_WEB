import { useNow } from '../hooks/useNow.js'

export default function TodayDateTime() {
  const now = useNow()
  const date = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })
  const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })

  return (
    <time dateTime={now.toISOString()} className="text-sm text-muted tabular-nums">
      {date} · {time}
    </time>
  )
}