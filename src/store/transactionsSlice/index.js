import { createSlice } from '@reduxjs/toolkit'

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: {
    transactionsList: [],
  },
})
