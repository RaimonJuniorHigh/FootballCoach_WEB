import { useEffect, useState } from 'react'

// Current time, refreshed every 30 seconds
export function useNow() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(timer)
  }, [])

  return now
}