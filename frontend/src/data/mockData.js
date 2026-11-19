// Fake data, until the backend is ready.
// Later these values will come from an API instead of this file.

// The club: known before login (login page, sidebar)
export const club = {
  name: 'sv Budel',
  initials: 'SB',
}

// Mock accounts until the backend has a login endpoint.
// Log in with: coach@svbudel.nl / fontys  or  speler@svbudel.nl / fontys
// "role" comes from the database: 'coach' or 'player'.
// "title" is the function within the team (optional, e.g. not for players).
export const mockUsers = [
  {
    id: 1,
    email: 'coach@svbudel.nl',
    password: 'fontys',
    name: 'Pep Guardiola',
    initials: 'PG',
    role: 'coach',
    title: 'Hoofdtrainer',
    team: 'JO17-1',
    notifications: true,
    language: 'nl',
  },
  {
    id: 2,
    email: 'speler@svbudel.nl',
    password: 'fontys',
    name: 'Sem de Vries',
    initials: 'SV',
    role: 'player',
    team: 'JO17-1',
    notifications: false,
    language: 'nl',
  },
]

export const sessions = [
  { id: 1, title: 'Passen onder druk', focus: 'Passing', date: 'Do 12 nov', duration: 75, players: 16, status: 'planned' },
  { id: 2, title: 'Afronden in de zestien', focus: 'Afronden', date: 'Za 14 nov', duration: 60, players: 14, status: 'draft' },
  { id: 3, title: 'Omschakelen na balverlies', focus: 'Omschakelen', date: 'Di 17 nov', duration: 90, players: 18, status: 'ai' },
]