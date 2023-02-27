import { addToken, getToken } from '../utils/security.js'

const API_URL = 'http://localhost:3001/api/v1'

const login = async (email, password) => {
  // const headers = new Headers()
  // headers.append('Content-Type', 'application/json')

  // const options = {
  //   method: 'POST',
  //   mode: 'cors',
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  //   headers,
  // }

  // const response = await fetch(`${API_URL}/user/login`, options)
  // return response.json().body.token

  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      mode: 'cors',
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
      addToken(token)
      return { isAuthenticated: true }
    } else {
      throw new Error('Missing or invalid required token')
    }
  } catch (error) {
    throw error
  }
}

const getUserData = async () => {
  // const token = getToken()
  // if (!token) {
  //   return null
  // }
  // const headers = new Headers()
  // headers.append('Content-Type', 'application/json')
  // headers.append('Authorization', `Bearer ${token}`)

  // const options = {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers,
  // }

  // const response = await fetch(`${API_URL}/user/profile`, options)
  // const data = await response.json()
  // return data

  try {
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
    console.log('Data de getUserData:', data)
    return data.body
  } catch (error) {
    throw error
  }
}

export default {
  login,
  getUserData,
}
