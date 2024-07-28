import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [info, setInfo] = useState({})
    useEffect(() =>{
        const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        fetch(apiUrl)
        .then(res => res.json())
        .then((data)=> setInfo(data[currency]))
    }, [currency])

    return info
}

export default useCurrencyInfo