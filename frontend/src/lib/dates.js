// Dates are stored as 'YYYY-MM-DD' (ISO): as plain text, they sort and compare correctly.

// A Date -> 'YYYY-MM-DD' in local time (not UTC)
function toISO(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

// Today as 'YYYY-MM-DD'
export function todayISO() {
  return toISO(new Date())
}

// A date relative to today, e.g. isoFromToday(3) = in three days (for mock data)
export function isoFromToday(days) {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return toISO(date)
}

// '2026-11-21' -> Dutch display text, e.g. 'za 21 nov'
export function formatDate(iso, options = { weekday: 'short', day: 'numeric', month: 'short' }) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('nl-NL', options)
}