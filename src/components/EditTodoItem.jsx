import { Button } from '@mui/material'
import React, {  } from 'react'
import {  useTodos } from '../context/TodoContextProvider'
import { Link } from 'react-router-dom';

const EditTodoItem = ({todoName, todoPhone, todoImg, id}) => {
  const {deleteTodo} = useTodos();
  const hendleClick = () => {
    deleteTodo(id);
  }
  return (
    <div
    style={{
      display: 'inline-block',
      margin: '25px'
    }}
    >
      <img className='images' src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h4>{todoPhone}</h4>
      <Button onClick={hendleClick} variant="contained">Delete</Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained">Edit</Button>
      </Link>
      <Link to={`/details/${id}`}>
        <Button variant="contained">Details</Button>
      </Link>
    </div>
  )
}

export default EditTodoItem
