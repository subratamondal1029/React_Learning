import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch(`https://api.github.com/users/subratamondal1029`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github Followers: {data?.followers}
    <img src={data?.avatar_url} alt="Github Logo" width={300} className='mx-auto rounded-full'/>
    </div>
  )
}

export default Github

export const GithubInfoLoad = async () =>{
   const response =  fetch(`https://api.github.com/users/subratamondal1029`)
    return (await response).json()
}