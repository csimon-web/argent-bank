import { useState, useEffect } from 'react'

function useIsConnected() {
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem('isConnected')
  )

  useEffect(() => {
    const handleStorageChange = () => {
      setIsConnected(localStorage.getItem('isConnected'))
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return isConnected
}

export { useIsConnected }
