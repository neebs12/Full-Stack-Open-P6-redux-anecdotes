import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// COMPONENTS
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

// THUNK - merged asnc operations with action creation!
// -- asynchronous action creators
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  // this is where we use getAll to dispatch initial request to server about data that should be rendered first!
  const dispatch = useDispatch()

  useEffect(() => {
    // initial execution is returns an async function!
    dispatch(initializeAnecdotes())
  }, [dispatch]) // [dispatch] syntax is for eslint

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App