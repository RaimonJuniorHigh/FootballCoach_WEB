import { useParams } from 'react-router'
import PlaceholderPage from './PlaceholderPage.jsx'
import { players } from '../data/mockData.js'

// One player's profile (US-05). For now a placeholder.
export default function PlayerPage() {
  const { playerId } = useParams()
  const player = players.find((p) => p.id === Number(playerId))

  if (!player) {
    return <p className="text-muted">Deze speler bestaat niet.</p>
  }

  return <PlaceholderPage label={`Profiel van ${player.name}`} />
}