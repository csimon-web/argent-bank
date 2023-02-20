import { useState, useEffect } from 'react'

function useIsConnected() {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Fonction qui vérifie si le cookie jwt existe et le récupère s'il existe
    const getTokenFromCookie = () => {
      const jwtCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('jwt='))

      if (jwtCookie) {
        const token = jwtCookie.split('=')[1]
        return token
      }

      return null
    }

    // Vérification du cookie jwt
    const token = getTokenFromCookie()
    if (token) {
      setIsConnected(true)
    } else {
      setIsConnected(false)
    }

    // Écoute des changements de cookie
    const handleStorageChange = (event) => {
      if (event.key === 'jwt') {
        const newToken = event.newValue
        if (newToken) {
          setIsConnected(true)
        } else {
          setIsConnected(false)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return isConnected
}

export { useIsConnected }
