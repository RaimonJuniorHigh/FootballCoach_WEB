// How each role from the database is shown in the UI
export const roleLabels = {
  coach: 'Coach',
  player: 'Speler',
}

// What to show under someone's name: their title if they have one, otherwise their role
export function getUserTitle(user) {
  return user.title ?? roleLabels[user.role]
}