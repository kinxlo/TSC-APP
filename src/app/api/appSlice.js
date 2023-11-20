import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  test: null,
}

const APP_SLICE = {
  name: 'app',
  initialState: STATE,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload
    },
  },
}

const appSlice = createSlice(APP_SLICE)

export const { setTest } = appSlice.actions

export default appSlice.reducer

export const selectTest = (state) => state.app.test
