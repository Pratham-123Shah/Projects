import React from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Counter from "./Counter";
const App2=()=>{
    const counterstate=useContext(UserContext) // value inside context is send or received here 
    console.log(counterstate)
    return(
  <>
    <h1>Count is {counterstate.count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
 </>
    )
}
export default App2