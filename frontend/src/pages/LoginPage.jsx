import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { CircleAlert, CircleCheck } from 'lucide-react'
import ClubLogo from '../components/ClubLogo.jsx'
import { club } from '../data/mockData.js'
import { useAuth } from '../auth/AuthContext.jsx'
import { isEmpty, isValidEmail } from '../lib/validation.js'

// Check the fields; returns an object with a message per invalid field
function validate(email, password) {
  const errors = {}
  if (isEmpty(email)) errors.email = 'Vul je e-mail in.'
  else if (!isValidEmail(email)) errors.email = 'Vul een geldig e-mailadres in.'
  if (isEmpty(password)) errors.password = 'Vul je wachtwoord in.'
  return errors
}

export default function LoginPage() {
  const { user, login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  // Read the logout note once and keep it in this page's own state...
  const [cameFromLogout] = useState(location.state?.loggedOut === true)

  // ...then remove it from the browser history, so a refresh doesn't show it again
  useEffect(() => {
    if (location.state?.loggedOut) {
      navigate(location.pathname, { replace: true, state: null })
    }
  }, [location.state, location.pathname, navigate])

  // Logged in (just now, or already)? Go to the page they wanted, or Vandaag.
  if (user) {
    return <Navigate to={location.state?.from ?? '/'} replace />
  }

  // Came here by logging out, and nothing has gone wrong since?
  const showLoggedOut = cameFromLogout && Object.keys(errors).length === 0

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    // 1. Field checks first
    const fieldErrors = validate(email, password)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    // 2. Then the credentials. On success, the redirect above takes over.
    if (!login(email, password)) {
      setErrors({ form: 'E-mail of wachtwoord is onjuist.' })
    }
  }

  // Remove a field's error as soon as the user changes that field
  function clearError(field) {
    if (errors[field] || errors.form) {
      setErrors(({ [field]: _removed, form: _form, ...rest }) => rest)
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

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {showLoggedOut && (
            <p role="status" className="flex items-center gap-2 text-sm font-semibold text-auth-success">
              <CircleCheck size={16} className="shrink-0" />
              Je bent uitgelogd.
            </p>
          )}

          <div className="flex flex-col gap-2">
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              aria-label="E-mail"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
              onChange={() => clearError('email')}
              className="input-auth"
            />
            {errors.email && (
              <p id="email-error" className="flex items-center gap-2 text-sm font-semibold text-auth-error">
                <CircleAlert size={16} className="shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              name="password"
              type="password"
              placeholder="Wachtwoord"
              aria-label="Wachtwoord"
              autoComplete="current-password"
              aria-invalid={errors.password ? 'true' : undefined}
              aria-describedby={errors.password ? 'password-error' : undefined}
              onChange={() => clearError('password')}
              className="input-auth"
            />
            {errors.password && (
              <p id="password-error" className="flex items-center gap-2 text-sm font-semibold text-auth-error">
                <CircleAlert size={16} className="shrink-0" />
                {errors.password}
              </p>
            )}
          </div>

          {errors.form && (
            <p role="alert" className="flex items-center gap-2 text-sm font-semibold text-auth-error">
              <CircleAlert size={16} className="shrink-0" />
              {errors.form}
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