import { configureStore } from "@reduxjs/toolkit"

import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"

// const store = configureStore({
//   reducer: anecdoteReducer
// })

console.log(typeof anecdoteReducer)

const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
  }
})

store.subscribe(() => console.log(store.getState()))

// the `name` set for createSlice obj argument needs to be consistent with the reducer object property name so that the action dispatched is routed to the correct reducers
// const store = configureStore({
//   reducer: {
//     anecdote: anecdoteReducer,
//     notification: notificationReducer
//   }
// })

export default store