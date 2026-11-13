import { useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import ClubLogo from '../components/ClubLogo.jsx'
import { club } from '../data/mockData.js'
import { useAuth } from '../auth/AuthContext.jsx'

export default function LoginPage() {
  const { user, login } = useAuth()
  const location = useLocation()
  const [error, setError] = useState('')

  // Logged in (just now, or already)? Go to the page they wanted, or Vandaag.
  if (user) {
    return <Navigate to={location.state?.from ?? '/'} replace />
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    // On success, the user is set and the redirect above takes over
    if (!login(form.get('email'), form.get('password'))) {
      setError('E-mail of wachtwoord klopt niet.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-auth px-page text-auth-text">
      <div className="w-full max-w-sm">
        <ClubLogo variant="inverted" />
        <p className="mt-3 text-sm text-auth-muted">{club.name}</p>

        <div className="my-8 flex flex-col gap-3">
          <h1 className="text-6xl leading-none font-extrabold tracking-tight">
            Coach
            <br />
            assistent
          </h1>
          <p className="leading-tight text-auth-muted">Sessions drafted for you. Approved by you.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            aria-label="E-mail"
            autoComplete="email"
            className="input-auth"
          />
          <input
            name="password"
            type="password"
            placeholder="Wachtwoord"
            aria-label="Wachtwoord"
            autoComplete="current-password"
            className="input-auth"
          />

          {error && (
            <p role="alert" className="text-sm font-semibold text-auth-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-accent h-control mt-2 w-full justify-center text-base focus-visible:outline-auth-focus"
          >
            Inloggen
          </button>
        </form>
      </div>
    </div>
  )
}