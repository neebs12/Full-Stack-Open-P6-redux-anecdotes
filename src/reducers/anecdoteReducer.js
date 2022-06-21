import { createSlice } from "@reduxjs/toolkit"

import anecdoteServices from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [], // initial state set to empty array >:)
  reducers: {
    updateAnecdote(state, action) {
      // action.payload contains
      /*
      {
        id: id (number),
        anecdote: anecdote (obj)
      }
      */
      // then find the index of the anecdote to be updated, then mutate the array of object by reassigning that index to the new object!
      const id = action.payload.id
      const anecdote = action.payload.anecdote
      const indexToReplace = state.findIndex(s => s.id === id)
      state[indexToReplace] = anecdote // viola, state has been updated (mutation allowed with (?)thunk(?))
    },
    appendAnecdote(state, action) {
      const anecdote = action.payload
      state.push(anecdote)
    }
  }
})

export const {updateAnecdote, appendAnecdote} = anecdoteSlice.actions

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

export const incrementVote = (id, anecdote) => {
  return async (dispatch) => {
    // with id, we are incrementing its vote value
    // since we can trust that the front end state is consistent with the backend state, im sure we can use the front end state as a state substitute for updating! :D
    // -- this is so we would not need to N+1 request information from the server
    // also, this is where we would call upon the action
    // the whole anecdote object had to be passed in here as this would be the object to be passed to the client api
    // id is required for the update anecdote action
    // we will be incrementing here
    // shallow copy & increment
    anecdote = {...anecdote, votes: anecdote.votes + 1} 
    await anecdoteServices.updateAnecdote(id, anecdote)
    dispatch(updateAnecdote({id, anecdote}))
  }
}

export default anecdoteSlice.reducer // not .reducers, ffs