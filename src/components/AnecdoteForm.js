import React from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer' 

function AnecdoteForm() {
  const dispatch = useDispatch()
  const submitAnecdote = async (e) => {
    e.preventDefault()
    const anecdoteString = e.target.anecdote.value
    e.target.anecdote.value = '' // clearing input

    // note of the async action creation nature of addNote. therefore change that setNotification will visually change contents of notification prior it being reflected in the backend!
    // await dispatch(addAnecdote(anecdoteString)) // would this be valid?? -- with await??
    dispatch(addAnecdote(anecdoteString))
    dispatch(setNotification(`The anecdote: "${anecdoteString}" has been added!!!`, 10))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={submitAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm