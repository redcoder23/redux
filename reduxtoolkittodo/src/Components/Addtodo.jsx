import React, { useState} from 'react'
import {useDispatch} from 'react-redux';
import {addtodo} from '../features/todo';
function Addtodo() {
    const[input,setinput]=useState('');
    const dispatch=useDispatch();
    const addtodohandler=(e)=>{ 
        e.preventDefault(); 
        dispatch(addtodo(input));
        setinput('');
    }
  return (
    <div>
      <form onSubmit={addtodohandler}> 
        <input 
        type="text"
        placeholder='enter a todo...'
        value={input}
        onChange={(e)=>(setinput(e.target.value))}
        />
      </form>
      <button type="submit">add todo </button>
    </div>
  )
}

export default Addtodo
/* 
add is done via dispatch 
*/