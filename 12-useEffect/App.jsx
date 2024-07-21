import { useEffect, useState } from "react"
import Hello from "./Hello"

const App = () => {
    const [user, setUser] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => setUser(data.title))
        console.log(user);
    }, [])

  return (
    <>
    <button onClick={() => setCount((prev) => prev+1)}>count</button>
    <button onClick={() => setUser("remove")}>remove</button>
    <h3>{count }</h3>
    {
    user === "remove" ? "" : <Hello user={user}/>
    }
    </>
  )
}

export default App

// go "./Readme.md" for more info