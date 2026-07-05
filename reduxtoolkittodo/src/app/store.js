import {configureStore} from '@reduxjs/toolkit' 
import todoreducer from "../features/todo"
export const store=configureStore({
    reducer:todoreducer
});//takes in object in it