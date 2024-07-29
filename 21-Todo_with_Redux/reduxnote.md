# Start with creating Store

``` javascript 
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({});
```

# Create Reducer & slice

``` javascript 
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {your state}, // it would be any array or any object or something
    reducers: {
        addTodo: (state, action) => { //state is your initial state and action comes from components
            const todo = {
                id: 1,
                text: action.payload,
            }

            state.todos.push(todo) //add updated value to initial state
        },

        // other functions or mathods
    }
})

export const {addTodo, otherfunctions} = todoSlice.actions
export default todoSlice.reducer
```

# Then give access of reducers in Store

``` javascript 
import todoReducer from "../features/todo/todoSlice" //import from slice

export const store = configureStore({
    reducer: todoReducer // we need to add reducers here
})
```

# To Use reducers and value

## use reducres `useDispatch`

``` javascript 
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice' //import reducer that need to use

const dispatch = useDispatch();

dispatch(addTodo(value));
```

## use Values `useSelector`

``` javascript
import { useSelector, useDispatch } from 'react-redux'
useSelector(state => state.value) // state is your initial state and your value in your state (if need)
```