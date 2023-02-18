import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload.email
      state.user.token = action.payload.token
    },
  },
})
