import { useEffect, useState } from "react"

export const useLocalStorage = (key, value) => {
   const [data, setData] = useState(value)

   
   useEffect(() =>{
       const existingData = JSON.parse(localStorage.getItem(key))
       if(existingData){
        setData(existingData)
       }else localStorage.setItem(key, JSON.stringify(value))
   }, [])

   const updateData = (newValue) =>{
    if (typeof newValue === 'function') {
        localStorage.setItem(key, JSON.stringify(newValue(data)))
    }else{
        localStorage.setItem(key, JSON.stringify(newValue))
    }
    console.log(data)
    setData(newValue)
   }

   return [data, updateData]
}