import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // these are present here because <Provider store={store}>...</Provider>
  // useSelector essentially fetches the state then passes it through a function that processes it (typically filters with minor transformations?)
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    // this is where we dispatch an action, 
    // note with an action type and an associated id that further provides specificity to the functionality of the associated reducer once the action object is passed
    const action = {
      type: 'VOTE',
      data: {id}
    }
    // this will be dispatched to the registered reducer
    // does this rerender the component?
    dispatch(action)
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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App