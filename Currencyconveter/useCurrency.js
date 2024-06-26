import { useEffect,useState } from "react";

function useCurrency(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) // sometimes when api call is done return value is in string format so it is necessary to convert it into json file
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrency