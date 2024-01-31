import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react'
import { API } from '../helpers/const';
export const todoContext = createContext();
export const useTodos = () => useContext(todoContext);
// ! первый шаг создать INIT_STATE в котором будут лежать начальное состяние 
// ! 2 создать функию reducer в котором прописывается  swich конструкция на проверку тайп 
// ! 3 вызвать хук usereducer(reduce, INIT_STATE) возвращает [state, dispatch] 

const TodoContextProvider = ({children}) => {
    const INIT_STATE = {
        todos: [],
        oneTodo: {},
    };
    const reducer = (state = INIT_STATE, action) => {
        switch(action.type){
            case "GET_TODOS":
            return{...state, todos: action.payload };
            case "GET_ONE_TODO":
            return{...state, oneTodo: action.payload};
        }
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const addTodo  = async (todo) => {
        await axios.post(API, todo)
    }
    const getTodos = async () => {
        const {data} = await axios(API);
        dispatch({type: "GET_TODOS", payload: data})
        
    }
    // ! DELETE
    const deleteTodo = async (id) => {
        await axios.delete(`${API}/${id}`)
        getTodos();
    }
    // ! EDIT
    const editTodo = async (id, newTodo) => {
        await axios.patch(`${API}/${id}`, newTodo)
    }
    // ! GET_0NE_TODO
    const getOneTodo = async (id) => {
       const {data} =  await axios(`${API}/${id}`)
       dispatch({
        type: "GET_ONE_TODO",
        payload: data,
       })
    }
    const values = {
        todos: state.todos,
        oneTodo: state.oneTodo,
        addTodo,
        getTodos,
        deleteTodo,
        getOneTodo,
        editTodo
    };
  return (
    <todoContext.Provider value={values}>
      {children}
    </todoContext.Provider>
  )
}

export default TodoContextProvider
