const API_URL = 'http://localhost:3001/api/v1'

const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    if (data.token) {
      localStorage.setItem('isConnected', true);
    } else {
      throw new Error('Missing required token')
    }
  } catch (error) {
    throw error
  }
}

const getUserData = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('Not authenticated')
    }
    const response = await fetch(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    throw error
  }
}

export default {
  login,
  getUserData,
}
