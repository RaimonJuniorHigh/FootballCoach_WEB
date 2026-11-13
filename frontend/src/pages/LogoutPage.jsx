import { useEffect } from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../auth/AuthContext.jsx'

// Visiting /logout logs out, then goes to /login without a return route
export default function LogoutPage() {
  const { user, logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout])

  // Still logged in for a moment: show nothing until logout() has run
  if (user) return null

  return <Navigate to="/login" replace />
}