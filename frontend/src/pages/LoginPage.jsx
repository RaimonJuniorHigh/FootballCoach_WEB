import { useNavigate } from 'react-router'
import ClubLogo from '../components/ClubLogo.jsx'
import { club } from '../data/mockData.js'

export default function LoginPage() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    // For now: straight to Vandaag. Checking credentials comes in the next commit.
    navigate('/')
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
            placeholder="E-mailadres"
            aria-label="E-mailadres"
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