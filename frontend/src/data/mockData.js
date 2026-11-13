// Fake data, until the backend is ready.
// Later these values will come from an API instead of this file.

// The club: known before login (login page, sidebar)
export const club = {
  name: 'sv Budel',
  initials: 'SB',
}

// The logged-in user. "role" comes from the database: 'coach' or 'player'.
export const user = {
  name: 'Pep Guardiola',
  initials: 'PG',
  role: 'coach',
  team: 'JO17-1',
}
export const sessions = [
  { id: 1, title: 'Passen onder druk', focus: 'Passing', date: 'Do 12 nov', duration: 75, players: 16, status: 'planned' },
  { id: 2, title: 'Afronden in de zestien', focus: 'Afronden', date: 'Za 14 nov', duration: 60, players: 14, status: 'draft' },
  { id: 3, title: 'Omschakelen na balverlies', focus: 'Omschakelen', date: 'Di 17 nov', duration: 90, players: 18, status: 'ai' },
]