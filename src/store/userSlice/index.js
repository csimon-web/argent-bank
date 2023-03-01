/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      isConnected: false,
    },
  },
  reducers: {
    setUser: (currentSlice, action) => {
      currentSlice.user.id = action.payload.id
      currentSlice.user.email = action.payload.email
      currentSlice.user.firstName = action.payload.firstName
      currentSlice.user.lastName = action.payload.lastName
      currentSlice.user.isConnected = true
    },
    removeUser: (currentSlice) => {
      currentSlice.user.id = null
      currentSlice.user.email = null
      currentSlice.user.firstName = null
      currentSlice.user.lastName = null
      currentSlice.user.isConnected = false
    },
  },
})

const { setUser, removeUser } = userSlice.actions
export { setUser, removeUser }
