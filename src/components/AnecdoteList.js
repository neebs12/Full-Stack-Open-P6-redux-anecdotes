import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { incrementVote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

function AnecdoteList() {
  const anecdotes = useSelector(state => {
    // filter the state.anecdote first according to content of state.filter
    let filterString = state.filter
    let filteredAnecdotes = state.anecdote.filter(s => {
      const content = s.content
      return (new RegExp(filterString, 'gi')).test(content)
    })
    return [...filteredAnecdotes].sort((a, b) => b.votes - a.votes)
  }) // highest to lowest votes
  
  const dispatch = useDispatch()

  const vote = (id) => {
    const specificAnecdote = anecdotes.find(a => a.id === id)
    const anecdoteContent = specificAnecdote.content
    const anecdoteVotes = specificAnecdote.votes
    dispatch(incrementVote(id))
    dispatch(changeNotification(`you have voted on the anecdote: ${anecdoteContent}, the number of votes are now ${anecdoteVotes + 1}!!!`))
  }

  return (
    <>
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