import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

// // creation of a store from a reducer
// const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  // This is where the link between the store and the application is made. Via the `Provider` component of `react-redux`
  <Provider store={store}>
    <App />
  </Provider>
)
