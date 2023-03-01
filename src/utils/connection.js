import { removeToken, hasToken } from './security'
import API from '../services/api'
import store from '../store'
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
  // const fetchData = async () => {
  //   try {
  //     const data = await API.getUserData()
  //     dispatch(
  //       setUser({
  //         id: data.id,
  //         email: data.email,
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //         isConnected: true,
  //       })
  //     )
  //   } catch (e) {
  //     return e
  //   }
  // }

  // fetchData()
}

export const logout = () => {
  removeToken()
  // store.dispatch(removeUser())
}

export const isConnected = () => {
  const state = store.userSlice.getState()
  const { user } = state
  console.log(user)
  //   if (hasToken() && state.user.isConnected) {
  //     return true
  //   }
  // logout()
  // return false
}
