import { isoFromToday } from '../lib/dates.js'

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

// Trainings. "date" is ISO ('YYYY-MM-DD'), relative to today so the mock data never goes stale.
// "status": planned | draft | ai | empty (upcoming) or done (past)
export const sessions = [
  // Upcoming
  { id: 1, title: 'Passen onder druk', focus: 'Passing', date: isoFromToday(2), duration: 75, players: 16, status: 'planned' },
  { id: 2, title: null, focus: null, date: isoFromToday(5), duration: 90, players: null, status: 'empty' },
  { id: 3, title: 'Afronden in de zestien', focus: 'Afronden', date: isoFromToday(9), duration: 60, players: 14, status: 'draft' },

  // Past
  { id: 4, title: 'Positiespel 4-tegen-2', focus: 'Positiespel', date: isoFromToday(-2), duration: 75, players: 15, status: 'done' },
  { id: 5, title: 'Kopduels en standaardsituaties', focus: 'Standaardsituaties', date: isoFromToday(-5), duration: 60, players: 13, status: 'done' },
  { id: 6, title: 'Pressing als team', focus: 'Pressing', date: isoFromToday(-9), duration: 90, players: 16, status: 'done' },
]

// Players of the team. "position" is a code from constants/positions.js.
// "status" is provisional: its meaning is still to be decided with the team.
export const players = [
  { id: 1, name: 'Daan Verhoeven', initials: 'DV', position: 'keeper', openPoints: 1, attendance: 100, status: 'in' },
  { id: 2, name: 'Noah Bakker', initials: 'NB', position: 'right-back', openPoints: 3, attendance: 92, status: 'stalled' },
  { id: 3, name: 'Thijs Peeters', initials: 'TP', position: 'centre-back', openPoints: 0, attendance: 75, status: 'out' },
  { id: 4, name: 'Ruben Geurts', initials: 'RG', position: 'centre-back', openPoints: 0, attendance: 96, status: 'in' },
  { id: 5, name: 'Jesse Daniëls', initials: 'JD', position: 'midfielder', openPoints: 1, attendance: 88, status: 'review' },
  { id: 6, name: 'Bram Maas', initials: 'BM', position: 'midfielder', openPoints: 0, attendance: 100, status: 'in' },
  { id: 7, name: 'Mees Koolen', initials: 'MK', position: 'left-wing', openPoints: 0, attendance: 92, status: 'in' },
  { id: 8, name: 'Luuk Bekkers', initials: 'LB', position: 'striker', openPoints: 1, attendance: 96, status: 'in' },
]