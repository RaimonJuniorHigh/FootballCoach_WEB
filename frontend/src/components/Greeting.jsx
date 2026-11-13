import { useNow } from '../hooks/useNow.js'
import { user } from '../data/mockData.js'

function getGreeting(hour) {
  if (hour < 6) return 'Goedenacht'
  if (hour < 12) return 'Goedemorgen'
  if (hour < 18) return 'Goedemiddag'
  return 'Goedenavond'
}

export default function Greeting() {
  const now = useNow()
  const firstName = user.name.split(' ')[0]

  return <>{getGreeting(now.getHours())}, {firstName}</>
}