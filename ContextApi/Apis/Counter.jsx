import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Counter=()=>{
    const setting=useContext(UserContext)
    return(
        <>
        <button onClick={()=>{
           setting.setCount(setting.count+1)
        }}>Increment</button>
        <button onClick={()=>{
           setting.setCount(setting.count-1)
        }}>Decrement</button>
        </>
    )
}

export default Counter