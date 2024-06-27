import React, { useState } from "react";
import CartContext from "../../../contexts/CartContext.js";

const CartContextProvider=(props)=>{
    const[items,setItems]=useState([])
    console.log(props);
    
    return(
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider