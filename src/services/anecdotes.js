import axios from 'axios'

// here, we get all anecdotes from backend (:3001)
// add an anecdote to the backend

const baseUrl = 'http://localhost:3001'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/anecdotes`)
  return response.data
}

const addAnecdote = async (anecdote) => {
  const response = await axios.post(`${baseUrl}/anecdotes`, anecdote)
  return response.data // RESTful is created record
}

const updateAnecdote = async (id, anecdote) => {
  // use of PUT (.put)
  const response = await axios.put(`${baseUrl}/anecdotes/${id}`, anecdote)
  return response.data
}

const exportObj = { 
  getAll,
  addAnecdote,
  updateAnecdote,
}
export default exportObj
