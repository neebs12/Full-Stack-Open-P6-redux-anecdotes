import { createSlice } from "@reduxjs/toolkit"

const initialNotification = 'hello!, this is the initial notification! - much love, from reducer'

const notificationSlice = createSlice({
  name: 'notification', // `routed` action
  initialState: initialNotification, // initial state of slice
  reducers: {
    changeNotification(state, action) {
      // state changes to whatever the .payload is
      return action.payload
    },
  }
})

export const { changeNotification } = notificationSlice
export default notificationSlice.reducer // n combined reducers

