import SessionCard from './SessionCard.jsx'
import { sessions } from '../data/mockData.js'

export default function SessionsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sessions.map((s) => (
        <SessionCard key={s.id} {...s} onOpen={() => console.log('open', s.id)} />
      ))}
    </div>
  )
}