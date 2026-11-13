import { createContext, useContext, useState } from 'react'
import { mockUsers } from '../data/mockData.js'

const AuthContext = createContext(null)

// Mock: remember the user for this browser tab, so a refresh doesn't log you out.
// The real backend will replace this with its own session or token.
function loadUser() {
  try {
    return JSON.parse(sessionStorage.getItem('user')) ?? null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser)

  function login(email, password) {
    const found = mockUsers.find(
      (u) => u.email === email.trim().toLowerCase() && u.password === password,
    )
    if (!found) return false

    // Keep everything except the password
    const loggedIn = {
      id: found.id,
      email: found.email,
      name: found.name,
      initials: found.initials,
      role: found.role,
      title: found.title,
      team: found.team,
      notifications: found.notifications,
      language: found.language,
    }
    setUser(loggedIn)
    sessionStorage.setItem('user', JSON.stringify(loggedIn))
    return true
  }

  function logout() {
    setUser(null)
    sessionStorage.removeItem('user')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

// Use in any component: const { user, login, logout } = useAuth()
export function useAuth() {
  return useContext(AuthContext)
}