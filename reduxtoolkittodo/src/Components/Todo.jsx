import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removetodo } from '../features/todo/todoslice';
function Todo() {
    const dispatch=useDispatch();
   const todos=useSelector(state=>state.todos)
  return (
    <>
    <div>Todos </div>
    {todos.map((todo)=>(
        <li key={todo.id}> 
        {todo.text}
        <button onClick={()=>dispatch(removetodo(todo.id))}>X</button>
        </li>
    ))}
    </>
  )
}

export default Todo
