import { useSelector, useDispatch } from 'react-redux'

import { incrementVote, addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  // these are present here because <Provider store={store}>...</Provider>
  // useSelector essentially fetches the state then passes it through a function that processes it (typically filters with minor transformations?)
  const anecdotes = useSelector(state => [...state].sort((a, b) => b.votes - a.votes)) // these are hooks, also sorts in place
  const dispatch = useDispatch() // these are hooks, this re-renders!

  const vote = (id) => {
    // incrementVote is a action creator
    dispatch(incrementVote(id))
  }

  const submitAnecdote = (event) => {
    event.preventDefault() // form submission?
    dispatch(addAnecdote(event.target.anecdote.value))
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
      <h2>create new</h2>
      <form onSubmit={(e) => submitAnecdote(e)}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App