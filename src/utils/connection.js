import { removeToken, hasToken } from './security'
import API from '../services/api'
import { setUser, removeUser } from '../store/userSlice'

export const login = async (email, password, dispatch) => {
  await API.login(email, password)
  const fetchData = async () => {
    try {
      const data = await API.getUserData()
      dispatch(
        setUser({
          id: data.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          isConnected: true,
        })
      )
    } catch (e) {
      return e
    }
  }

  fetchData()
}

export const logout = (dispatch) => {
  removeToken()
  dispatch(removeUser())
}

export const isConnected = (user) => {
  if (hasToken() && user.isConnected) {
    return true
  }
  logout()
  return false
}
