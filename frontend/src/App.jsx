import { Routes, Route } from 'react-router'
import AppLayout from './components/AppLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SessionsPage from './pages/SessionsPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

export default function App() {
  return (
    <Routes>
      {/* Full-screen pages, without sidebar and header */}
      <Route path="/login" element={<LoginPage />} />

      {/* Pages inside the app shell (sidebar + header) */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<PlaceholderPage label="Vandaag" />} />
        <Route path="/team" element={<PlaceholderPage label="Team" />} />
        <Route path="/trainingen" element={<SessionsPage />} />
        <Route path="/oefeningen" element={<PlaceholderPage label="Oefeningen" />} />
        <Route path="/ai-assistent" element={<PlaceholderPage label="AI Assistant" />} />
        <Route path="/account" element={<PlaceholderPage label="Account" />} />
        <Route path="*" element={<PlaceholderPage label="Deze pagina bestaat niet" />} />
      </Route>
    </Routes>
  )
}