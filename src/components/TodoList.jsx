import React, {  useEffect } from 'react'
import {  useTodos } from '../context/TodoContextProvider'
import EditTodoItem from './EditTodoItem'

const TodoList = () => {
    const {getTodos, todos} = useTodos();
    useEffect(() => {
        getTodos();
    }, [])
    console.log(todos);
  return (
    <div>
      {todos.map((elem) => (
        <EditTodoItem {...elem} key={elem} />
      ))}
    </div>
  )
}

export default TodoList
