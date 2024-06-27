import React from "react";
import Item from "./Item";
import Cart from "./Cart";

const App21=()=>{
    return(
        <>
            <Item item="Macbook pro" price={1200}/>
            <Item item="Pendrive" price={100}/>
            <Item item="Iphone 13 pro" price={1000}/>
            <Cart/>
        </>
    )
}

export default App21