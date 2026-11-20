import SessionCard from '../components/SessionCard.jsx'
import PastSessionsTable from '../components/PastSessionsTable.jsx'
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

  // Before today, newest first
  const past = sessions
    .filter((s) => s.date < today)
    .sort((a, b) => b.date.localeCompare(a.date))

  function openSession(id) {
    console.log('open', id)
  }

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h2 className="text-section-title">Komende trainingen</h2>

        {upcoming.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {upcoming.map((s) => (
              <SessionCard
                key={s.id}
                {...s}
                onOpen={() => openSession(s.id)}
                onCreate={() => console.log('training invullen', s.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted">Er staan geen trainingen gepland.</p>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-section-title">Afgelopen trainingen</h2>

        {past.length > 0 ? (
          <PastSessionsTable sessions={past} onOpen={openSession} />
        ) : (
          <p className="text-muted">Er zijn nog geen afgelopen trainingen.</p>
        )}
      </section>
    </div>
  )
}