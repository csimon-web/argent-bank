import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    usersList: [
      {
        id: 0,
        email: 'QSD@QSDF.COM',
        firstName: 'QSDF',
        lastName: 'QDF',
        isConnected: false,
      },
    ],
    user: {},
  },
  reducers: {
    addUser: (currentSlice, action) => {
      currentSlice.usersList.push({
        id: 1,
        email: 'qf@qf.com',
        firstName: 'Jean',
        lastName: 'Dupont',
        isConnected: true,
      })
      console.log('addUser()', action)
    },
    setUser: (currentSlice, action) => {
      currentSlice.user.id = action.payload.id
      currentSlice.user.email = action.payload.email
      currentSlice.user.firstName = action.payload.firstName
      currentSlice.user.lastName = action.payload.lastName
      currentSlice.user.isConnected = true
    },
  },
})

const { addUser, setUser } = userSlice.actions
export { addUser, setUser }
