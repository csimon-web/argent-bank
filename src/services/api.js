import { addToken, getToken } from '../utils/security'

const API_URL = 'http://localhost:3001/api/v1'

const login = async (email, password) => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    mode: 'cors',
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

  if (data.status === 200 && data.body && data.body.token) {
    const { token } = data.body
    addToken(token)
    return data
  }
  throw new Error('Missing or invalid required token')
}

const getUserData = async () => {
  const token = getToken()
  if (!token) {
    throw new Error('Not authenticated')
  }
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.body
}

const updateUserData = async (firstName, lastName) => {
  const token = getToken()
  if (!token) {
    throw new Error('Not authenticated')
  }
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName,
      lastName,
    }),
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.body
}

export default {
  login,
  getUserData,
  updateUserData,
}
