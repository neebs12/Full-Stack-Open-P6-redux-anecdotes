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

export const { changeNotification } = notificationSlice.actions

export const setNotification = (message, seconds = 5) => {
  return (dispatch) => { // note, omitted use of `async` as no comms w server
    dispatch(changeNotification(message))
    setTimeout(() => {
      // empty!
      dispatch(changeNotification(''))
    }, seconds * 1000)
  }
}


export default notificationSlice.reducer // n combined reducers

