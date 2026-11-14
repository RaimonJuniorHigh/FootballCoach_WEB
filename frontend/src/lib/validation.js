// Shared form checks, reusable in every form (login, team, players, ...)

export function isEmpty(value) {
  return !value || value.trim() === ''
}

// Simple format check: something@something.something
// The backend does the real check; this only catches obvious typos early.
export function isValidEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value.trim())
}