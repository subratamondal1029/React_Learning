import React, { useRef } from 'react'

const App = () => {
    const myref = useRef("hi") //output {current: "hi"}
    console.log(myref.current);

  return (
    <>
    <div ref={myref}>App</div>
    </>
  )
}

export default App

// If we use useState it will update the dom when the value will update
// But we use useref it will store the value but the dom will not update automatically 
// But when we rerender menually the dom it will update the dom Its dont delete the value like the normal (let) variable, it will store the value 
// Its return a object {current: value}
// we can get refrence of any dom element
// This is mostly use to store value like file input or store any element 