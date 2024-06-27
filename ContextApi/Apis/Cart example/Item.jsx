import React, { useContext } from "react";
import CartContext from "../../../contexts/CartContext.js";


const Item=(props)=>{
    const settingitems=useContext(CartContext)
    console.log("Carting",settingitems);
    
   function setttt(){
    settingitems.setItems([...settingitems.items,{name:props.item,price:props.price}])
   }
   return(
    <>
        <h4 style={{}}>{props.item}</h4>
        <p>$ {props.price}</p>
        <button onClick={setttt}>Add to Cart</button>
    </>
   )
}

export default Item