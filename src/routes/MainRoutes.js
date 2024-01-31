import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../components/HomePages'
import AppTodo from '../components/AppTodo'
import EditTodo from '../components/EditTodo'
import TodoDelits from '../components/TodoDelits'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='/add' element={<AppTodo />} />
      <Route path='edit/:id' element={<EditTodo />} />
      <Route path='/details/:id' element={<TodoDelits />} />
    </Routes>
  )
}

export default MainRoutes
