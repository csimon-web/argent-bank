import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      id: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  },
  reducers: {
    addUser: (currentSlice) => {
      currentSlice.userSlice.push({
        id: 01,
        email: 'qf@qf.com',
        password: 'qdfq',
        firstName: 'Jean',
        lastName: 'Dupont',
      })
    },
    // setUser: (state, action) => {
    //   state.user.email = action.payload.email
    //   state.user.token = action.payload.token
    // },
  },
})

const { addUser,  } = userSlice.actions
export { addUser }