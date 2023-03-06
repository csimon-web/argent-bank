import { removeToken, hasToken } from './security'
import API from '../services/api'
import { store } from '../store'
import { setUser } from '../store/userSlice'

export const login = async (email, password) => {
  try {
    const response = await API.login(email, password)
    const user = await API.getUserData()
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isConnected: true,
      })
    )
    return response
  } catch (e) {
    return e
  }
}

export const logout = () => {
  removeToken()
  // store.dispatch(removeUser())
}

export const isConnected = () => {
  if (hasToken()) {
    return true
  }
  logout()
  return false
}

export const mountData = async () => {
  const data = await API.getUserData()
  store.dispatch(
    setUser({
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      isConnected: true,
    })
  )
}

export const updateName = async (firstName, lastName) => {
  try {
    const user = await API.getUserData()
    await API.updateUserData(firstName, lastName)
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        firstName,
        lastName,
        isConnected: true,
      })
    )
    return true
  } catch (e) {
    return e
  }
}
