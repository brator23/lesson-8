
import { Button, TextField } from '@mui/material'
import React, {  useState } from 'react'
import {  useTodos } from '../context/TodoContextProvider'
import { useNavigate } from 'react-router-dom'

const AppTodo = () => {
    const {addTodo} = useTodos();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [img, setImg] = useState("")
    const navigate = useNavigate();
    const handleClick = () => {
        if(!name || !phone || !img){
            return;
        }
        let newTodo = {
            todoName: name,
            todoPhone: phone,
            todoImg: img,
        }
        addTodo(newTodo);
        setName("");
        setPhone("");
        setImg("");
        navigate("/")
    }
  return (
    <div>
      <TextField value={name} id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setName(e.target.value)} multili nemaxRows={4} />
      <TextField value={phone} id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setPhone(e.target.value)}  multili nemaxRows={4} />
      <TextField value={img} id="outlined-multiline-flexible" label="Multiline" onChange={(e) => setImg(e.target.value)} multili nemaxRows={4} />
      <Button onClick={handleClick} variant="contained">Contained</Button>
        
    </div>
  )
}

export default AppTodo
