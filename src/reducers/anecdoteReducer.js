import { createSlice } from "@reduxjs/toolkit"

import anecdoteServices from "../services/anecdotes"

const anecdotesAtStart = [
  // 'If it hurts, do it more often',
  // 'Adding manpower to a late software project makes it later!',
  // 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  // 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  // 'Premature optimization is the root of all evil.',
  // 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0) // used of ini state construction

const asObject = (anecdote) => { // used for initial state construction
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: initialState, // imperative
  reducers: {
    incrementVote(state, action) {
      // can mutate state within createSlice
      // state is an array (at this location)
      
      const id = action.payload
      const specificState = state.find(s => s.id === id)
      if (specificState) {
        // found a specific state
        // mutation
        specificState.votes = specificState.votes + 1
      }
      // no need to return due to mutation
    },
    appendAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    }
  }
})

export const {incrementVote, appendAnecdote} = anecdoteSlice.actions

// THUNKS - async action creators!
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll()
    anecdotes.forEach(a => {
      // dispatch(anecdoteSlice.appendAnecodte(a))
      dispatch(appendAnecdote(a)) // action creator in scope
    })
  }
}

export const addAnecdote = (anecdoteString) => {
  const prelimAnecdoteObj = {
    content: anecdoteString, // config to be at content property
    votes: 0 // default 0 votes
  }
  return async (dispatch) => {
    // here we send prelim object to the server
    const receipt = await anecdoteServices.addAnecdote(prelimAnecdoteObj)
    // then receipt will have the .id now!, then this is what is sent to the action creator: appendAnecdote
    dispatch(appendAnecdote(receipt))
  }
}

export default anecdoteSlice.reducer // not .reducers, ffs