import axios from 'axios'

// here, we get all anecdotes from backend (:3001)
// add an anecdote to the backend

const baseUrl = 'http://localhost:3001'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/anecdotes`)
  return response.data
}

const addAnAnecdote = async (anecdote) => {
  const response = await axios.post(`${baseUrl}/anecdotes`, anecdote)
  return response.data // RESTful is created record
}

export { 
  getAll,
  addAnAnecdote,
}

// export default exportObj