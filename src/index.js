import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // This is where the link between the store and the application is made. Via the `Provider` component of `react-redux`
  <Provider store={store}>
    <App />
  </Provider>
)
