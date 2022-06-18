import React from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer' 

function AnecdoteForm() {
  const dispatch = useDispatch()
  const submitAnecdote = (e) => {
    e.preventDefault()
    const anecdoteString = e.target.anecdote.value
    e.target.anecdote.value = '' // clearing input
    // note, that the subscribed listener is running twice due to TWO dispatches, see below
    dispatch(addAnecdote(anecdoteString))
    dispatch(changeNotification(`The anecdote: "${anecdoteString}" has been added!!!`))
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