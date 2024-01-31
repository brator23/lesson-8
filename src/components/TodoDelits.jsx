import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTodos } from '../context/TodoContextProvider';

const TodoDelits = () => {
  const {id} = useParams();
  const {oneTodo, getOneTodo} = useTodos();
  useEffect(() => {
    getOneTodo(id)
  }, [])
  return (
    <div>
      <img className='images' src={oneTodo.todoImg} alt="" />
      <h3>{oneTodo.todoName}</h3>
      <h4>{oneTodo.todoPhone}</h4>
    </div>
  )
}

export default TodoDelits
