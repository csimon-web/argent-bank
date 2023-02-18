import { createSlice } from '@reduxjs/toolkit'

const authorisationSlice = createSlice({
  name: 'authorisationSlice',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authorisationSlice.actions

export default authorisationSlice.reducer
