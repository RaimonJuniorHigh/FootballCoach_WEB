import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../auth/AuthContext.jsx'

// Guard for protected pages: not logged in -> to /login
export default function RequireAuth() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Remember where they wanted to go, so login can send them back there
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}