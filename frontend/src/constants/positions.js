// Positions as the database will send them (code), with their Dutch label
// and the line they belong to (used by the filters in the next commit).
export const positions = {
  keeper: { label: 'Keeper', line: 'keeper' },
  'right-back': { label: 'Rechtsback', line: 'defence' },
  'centre-back': { label: 'Centrale verdediger', line: 'defence' },
  'left-back': { label: 'Linksback', line: 'defence' },
  midfielder: { label: 'Middenvelder', line: 'midfield' },
  'right-wing': { label: 'Rechtsbuiten', line: 'attack' },
  'left-wing': { label: 'Linksbuiten', line: 'attack' },
  striker: { label: 'Spits', line: 'attack' },
}