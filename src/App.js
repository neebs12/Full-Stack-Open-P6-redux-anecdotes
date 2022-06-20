import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// COMPONENTS
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

// ACTION CREATORS
import { addAnecdote } from './reducers/anecdoteReducer'

// SERVICES
import { getAll } from './services/anecdotes'

const App = () => {
  // this is where we use getAll to dispatch initial request to server about data that should be rendered first!
  const dispatch = useDispatch()

  useEffect(() => {
    // preserving async await, via iife, kinda dumb
    (async () => {
      const initialAnecdotes = await getAll()
      // then assign to redux store via action creator then dispatch
      // assuming that we get an array of obj [{..}, {..}, ..]
      initialAnecdotes.forEach(anecdote => {
        /*this is where we dispatch!*/
        dispatch(addAnecdote(anecdote))
      })
    })()

  }, [dispatch])

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