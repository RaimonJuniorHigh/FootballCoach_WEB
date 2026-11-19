import SessionCard from '../components/SessionCard.jsx'
import { sessions } from '../data/mockData.js'
import { todayISO } from '../lib/dates.js'

// How many upcoming trainings to show as cards (2 trainings per week)
const UPCOMING_LIMIT = 2

export default function SessionsPage() {
  const today = todayISO()

  // From today onwards, soonest first, max. UPCOMING_LIMIT
  const upcoming = sessions
    .filter((s) => s.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, UPCOMING_LIMIT)

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold tracking-tight">Komende trainingen</h2>

      {upcoming.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((s) => (
            <SessionCard key={s.id} {...s} onOpen={() => console.log('open', s.id)} />
          ))}
        </div>
      ) : (
        <p className="text-muted">Er staan geen trainingen gepland.</p>
      )}
    </section>
  )
}