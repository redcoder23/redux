import { createSlice, nanoid } from '@reduxjs/toolkit';
//nanoid keeps on generating unique id's
//initialstate can be array or object anything so no issue 
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

/*reducer*/
function sayhello() {
    console.log("hello world");
}

export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addtodo:sayhello  can be this way 
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo);
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !==
                action.payload)
        },
        /* 
        for update it will send the id as well as the text
        */
        updatetodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id)
                    return { id: action.payload.id, text: action.payload.text };
                return todo;
            })
        }

    }
})
/* 
one important thing that we have here
is that there are two functions for addtodo one is actioncreator and another is reducer  
action creater is created by the createslice 

it is basically function addtodo(payload) 
{ 
 return { 
   type:"todo/addtodo",
   payload 
 };
}
*/
export const { addtodo, removetodo, updatetodo } = todoslice.actions;
export default todoslice.reducer;
/*whatever is written is syntax */
/*
 for redux  it internally does something like this
 1.you dispatch:
 dispatch(addtodo({text:"learn redux"}));
  
 2.action creater addtodo does: 
 { 
   type:"todo/addtodo",
   payload:{ 
   text:"learn redux" 
   } 
 } 
   redux receives this object redux already knows the current
   state for ex: 

   state={  
     todos:[{id:1,text:'hello world'}] 
   }
3.now redux does internally something llike this
yourReducder(state,action )

where 
state={
todos:[{id:1,text:"hello world"}]  
}

action={
type:"todo/addtodo", 
payload:{ 
text:"learn redux" 
}

}
 


*/