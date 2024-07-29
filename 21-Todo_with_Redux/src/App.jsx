import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
const [addDetails, setAddDetails] = useState({
  input: "",
  isEdit: false,
  id: ""
})
  return (
    <>
     <h1 className='text-3xl text-white'>Todo with Redux toolkit</h1>
     <Addtodo addDetailsState={{addDetails, setAddDetails}}/>
     <Todos setAddDetails={setAddDetails}/>
    </>
  )
}

export default App
