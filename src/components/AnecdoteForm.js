import React from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer' 

// SERVICES
import anecdoteServices from '../services/anecdotes'

function AnecdoteForm() {
  const dispatch = useDispatch()
  const submitAnecdote = async (e) => {
    e.preventDefault()
    const anecdoteString = e.target.anecdote.value
    e.target.anecdote.value = '' // clearing input

    // add anecdote!
    const createdAnecdote = await anecdoteServices.addAnecdote({content: anecdoteString, votes: 0})

    // contains the 
    
    // note, that the subscribed listener is running twice due to TWO dispatches, see below
    dispatch(addAnecdote(createdAnecdote))
    dispatch(changeNotification(`The anecdote: "${createdAnecdote.content}" has been added!!!`))
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