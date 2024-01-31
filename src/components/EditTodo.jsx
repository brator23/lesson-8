import { Button, TextField } from '@mui/material';
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  useTodos } from '../context/TodoContextProvider';

const EditTodo = () => {
  const {getOneTodo, oneTodo, editTodo} = useTodos();
  console.log(oneTodo);
  const [name, setName] = useState(oneTodo.todoName)
  const [phone, setPhone] = useState(oneTodo.todoPhone)
  const [img, setImg] = useState(oneTodo.todoImg)
  const {id} = useParams();
  const navigate = useNavigate('');
  useEffect(() => {
    getOneTodo(id)
  }, [])
  useEffect(() => {
    if(oneTodo){
      setName(oneTodo.todoName)
      setPhone(oneTodo.todoPhone)
      setImg(oneTodo.todoImg)
    }
  },[oneTodo])
  const handleClick = () => {
    if (!name || !phone || !img){
      return;
    }
    let newTodo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    }
    editTodo(id,newTodo)
    navigate("/")
  }
  return (
    <div>
      <TextField value={name}  id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setName(e.target.value)} multili nemaxRows={4} />
      <TextField value={phone} id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setPhone(e.target.value)}  multili nemaxRows={4} />
      <TextField value={img} id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setImg(e.target.value)}  multili nemaxRows={4} />
      <Button onClick={handleClick}  variant="contained">Save</Button>
    </div>
  )
}

export default EditTodo
