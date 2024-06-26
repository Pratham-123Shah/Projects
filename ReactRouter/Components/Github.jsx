import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github=()=>{
    const data=useLoaderData() // gives what is returning from loader
    console.log(data);
    // const[f,setF]=useState([])
    // useEffect(()=>{
    //     fetch('https//api.github.com/users/hiteshchoudhary')
    //     .then(res=>{
    //         console.log(res);
    //         res.json()
    //     })
    //     .then(data=>{
    //         setF(data)
    //     })
    //     // .then(data=>{
    //     //     console.log(data);
    //     //     setF(data)
    //     },[])
    
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers :  {data.followers}
        <img src={data.avatar_url}/>
        </div>
        
    )
}

export default Github

export const gitloader= async ()=>{
    const res=await fetch('https://api.github.com/users/jupyter')
    return res.json(); 
}