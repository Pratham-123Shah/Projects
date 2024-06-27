import React, { useState } from "react";
import UserContext from "../../contexts/UserContext";

const ContextProvider=(props)=>{
    console.log(props)
    const[count,setCount]=useState(100)
   return(
    <UserContext.Provider value={{count,setCount}}>
        {props.children}
    </UserContext.Provider>
   )
}

export default ContextProvider