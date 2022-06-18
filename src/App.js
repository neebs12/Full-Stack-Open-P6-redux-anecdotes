import { useSelector, useDispatch } from 'react-redux'

import { incrementVote, addAnecdote } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  // these are present here because <Provider store={store}>...</Provider>
  // useSelector essentially fetches the state then passes it through a function that processes it (typically filters with minor transformations?)

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App