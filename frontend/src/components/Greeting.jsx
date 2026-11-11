import { useEffect, useState } from 'react'
import { coach } from '../data/mockData.js'

// Dutch greeting based on the hour (0–23)
function getGreeting(hour) {
  if (hour < 6) return 'Goedenacht'
  if (hour < 12) return 'Goedemorgen'
  if (hour < 18) return 'Goedemiddag'
  return 'Goedenavond'
}

export default function Greeting() {
  const [now, setNow] = useState(new Date())

  // Refresh the time every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(timer)
  }, [])

  const firstName = coach.name.split(' ')[0]
  const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="flex flex-col gap-1.5 text-right">
      <p className="text-xs leading-4 text-muted tabular-nums">
        <time dateTime={now.toISOString()}>{date} · {time}</time>
      </p>
      <p className="text-base leading-5 text-body">
        {getGreeting(now.getHours())},{' '}
        <span className="font-semibold text-header-text">{firstName}</span>
      </p>
    </div>
  )
}