const API_URL = 'http://localhost:3001/api/v1'

const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data)

    if (data.status === 200 && data.body && data.body.token) {
      const token = data.body.token
      console.log(token)
      document.cookie = `jwt=${token};`
      // document.cookie = `jwt=${token}; Secure; HttpOnly; SameSite=Strict`
      return { isAuthenticated: true }
    } else {
      throw new Error('Missing or invalid required token')
    }
  } catch (error) {
    throw error
  }
}

const getUserData = async () => {
  try {
    const jwtCookie = document.cookie
      .split(';')
      .find((cookie) => cookie.startsWith('jwt='))
    if (!jwtCookie) {
      throw new Error('Not authenticated')
    }
    const token = jwtCookie.split('=')[1]
    const response = await fetch(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data)
    return data.body
  } catch (error) {
    throw error
  }
}

export default {
  login,
  getUserData,
}
