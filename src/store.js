import { configureStore } from "@reduxjs/toolkit"

import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"

const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    notification: notificationReducer
  }
})

// listener cb, always run at any action
// queries store to display all states
store.subscribe(() => console.log(store.getState()))

export default store