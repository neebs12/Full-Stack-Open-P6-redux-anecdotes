const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
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

/*Action Creators*/

export const incrementVote = (id) => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const addAnecdote = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    data: {anecdote}
  }
}

/*Reducers*/

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  // this is where the switch case lives
  switch (action.type) {
    case 'VOTE':
      return [...state].map(s => {
        return s.id === action.data.id 
          ? {...s, votes: s.votes + 1} 
          : s
      })
    case 'ADD_ANECDOTE':
      return state.concat({
        content: action.data.anecdote,
        id: getId(),
        votes: 0,
      })
    default:
      return state // unchanged
  }
}

export default reducer