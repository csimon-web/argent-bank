import { removeToken, hasToken } from './security'
import API from '../services/api'
import { store } from '../store'
import { setUser, removeUser } from '../store/userSlice'

export const login = async (email, password) => {
  try {
    await API.login(email, password)
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
  } catch (e) {
    return e
  }
}

export const logout = () => {
  removeToken()
  store.dispatch(removeUser())
}

export const isConnected = () => {
  const state = store.getState()
  const { user } = state
  if (user && user.user.isConnected) {
    return true
  }
  logout()
  return false
}

export const updateName = async (firstName, lastName) => {
  try {
    const user = await API.getUserData()
    await API.updateUserData(firstName, lastName)
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        isConnected: true,
      })
    )
  } catch (e) {
    return e
  }
}
