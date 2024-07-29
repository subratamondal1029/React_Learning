import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Learn React"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.map((prevTodo) => {
                if (prevTodo.text !== action.payload) {
                    const todo = {
                        id: nanoid(),
                        text: action.payload,
                    }

                    state.todos.push(todo)
                }
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
         state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer