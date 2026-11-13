import { Routes, Route } from 'react-router'
import AppLayout from './components/AppLayout.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LogoutPage from './pages/LogoutPage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import SessionsPage from './pages/SessionsPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

export default function App() {
  return (
    <Routes>
      {/* Full-screen pages, without sidebar and header */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />

      {/* Protected: only when logged in */}
      <Route element={<RequireAuth />}>
        {/* Pages inside the app shell (sidebar + header) */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<PlaceholderPage label="Vandaag" />} />
          <Route path="/team" element={<PlaceholderPage label="Team" />} />
          <Route path="/trainingen" element={<SessionsPage />} />
          <Route path="/oefeningen" element={<PlaceholderPage label="Oefeningen" />} />
          <Route path="/ai-assistent" element={<PlaceholderPage label="AI Assistant" />} />

          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/assistent" element={<PlaceholderPage label="Wat de assistent kan zien" />} />
          <Route path="/account/team-overdragen" element={<PlaceholderPage label="Team overdragen" />} />
          <Route path="/account/teamgegevens-verwijderen" element={<PlaceholderPage label="Teamgegevens verwijderen" />} />

          <Route path="*" element={<PlaceholderPage label="Deze pagina bestaat niet" />} />
        </Route>
      </Route>
    </Routes>
  )
}