import { useSelector, useDispatch } from 'react-redux'

import { incrementVote, addAnecdote } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  // these are present here because <Provider store={store}>...</Provider>
  // useSelector essentially fetches the state then passes it through a function that processes it (typically filters with minor transformations?)
  const anecdotes = useSelector(state => [...state].sort((a, b) => b.votes - a.votes)) // these are hooks, also sorts in place
  const dispatch = useDispatch() // these are hooks, this re-renders!

  const vote = (id) => {
    // incrementVote is a action creator
    dispatch(incrementVote(id))
  }

  return (
    <div>
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
      <AnecdoteForm />
    </div>
  )
}

export default App