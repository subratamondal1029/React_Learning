import React, { useEffect } from 'react'

const Hello = ({user}) => {
    useEffect(() =>{
        return () =>{
            console.log('Component Clear');
        }
    })
  return (
    <h1>{user}</h1>
  )
}

export default Hello