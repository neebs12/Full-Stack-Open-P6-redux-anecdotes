import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { changeFilter } from '../reducers/filterReducer' 

function Filter() {
  const dispatch = useDispatch()
  // controlled state, for dynamic changes
  const [inputChange, setInputChange] = useState('')

  const onChangeHandler = (e) => {
    const inputValue = e.target.value
    // console.log(inputValue)
    setInputChange(inputValue) // local ui state change
    dispatch(changeFilter(inputValue)) // dispatching for redux-store
  }

  return (
    <>
      filter: 
      <input onChange={onChangeHandler} value={inputChange}/>
    </>
  )
}

export default Filter