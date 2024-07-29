import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

const Addtodo = ({addDetailsState}) => {

    const {addDetails, setAddDetails} = addDetailsState

    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault();
        if (addDetails.input) {
          if (!addDetails.isEdit) {
            dispatch(addTodo(addDetails.input))
          }else {
            dispatch(updateTodo({text:addDetails.input, id: addDetails.id}))

          }
          setAddDetails((prev) => ({...prev, input: "", id: "", isEdit: false}))
        }
        
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={addDetails.input}
            onChange={(e) => setAddDetails((prev) => ({...prev, input: e.target.value}))}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {addDetails.isEdit ? "Edit Todo" : "Add Todo"}
            
          </button>
        </form>
      )
}

export default Addtodo