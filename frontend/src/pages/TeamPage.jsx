import PlayersTable from '../components/PlayersTable.jsx'
import { players } from '../data/mockData.js'

export default function TeamPage() {
  const count = players.length

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">
        {count} {count === 1 ? 'speler' : 'spelers'}
      </p>
      <PlayersTable players={players} />
    </div>
  )
}