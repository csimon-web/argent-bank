import { configureStore } from '@reduxjs/toolkit'
// import { authorisationSlice } from './authorisationSlice'
import { userSlice } from './userSlice'
import { transactionsSlice } from './transactionsSlice'

const store = configureStore({
  reducer: {
    // authorisation: authorisationSlice.reducer,
    user: userSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
})

export { store }
