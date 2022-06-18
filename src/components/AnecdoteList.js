import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementVote } from '../reducers/anecdoteReducer'

function AnecdoteList() {
  const anecdotes = useSelector(state => [...state].sort((a, b) => b.votes - a.votes)) // highest to lowest votes
  const dispatch = useDispatch()

  const vote = (id) => dispatch(incrementVote(id))

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList