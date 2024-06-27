import React, { useState,useCallback,useEffect,useRef } from "react";

const Passgen=()=>{
    const[length,setLength]=useState(8)
    const [numberall,setNumberall]=useState(false)
    const [charall,setCharall]=useState(false)
    const [input,setInput]=useState('')
    // ref hook
    const passwordRef=useRef(null)

    const passGenerator=useCallback(()=>{
        let pass=''
        let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if(numberall){
            str+='0123456789'
        }
        if(charall){
            str+='!@#$%^&*~`'
        }
        for (let i =1 ; i <= length; i++){
            let char=Math.floor (Math.random()*str.length+1)
           pass+=str.charAt(char)
        }
        setInput(pass)
    },[length,numberall,charall]) //--> remember the function in cache memory for optimization

    const Copy=useCallback(()=>{
        window.navigator.clipboard.writeText(input)
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,3)
        passwordRef.current.style.color='black'
    },[])
    useEffect(()=>{
        passGenerator()
    },[length,charall,numberall,]) // -->running the function
    return(
        <>
        <div style={{height:'100vh',backgroundColor:'black',display:'flex',justifyContent:'center'}}>
            <div  className="pass">
            <div className="inpu">
                <input type="text" style={{outline:'none',fontSize:'20px',width:'80%',color:'orange'}} value={input} readOnly ref={passwordRef}></input>
                <button onClick={Copy}>Copy</button>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
                <label>Length:{length}</label>
                <input type="checkbox" defaultChecked={numberall} onChange={()=>{setNumberall((pre)=>!pre)}}></input>
                <label>Numbers</label>
                <input type="checkbox" defaultChecked={charall} onChange={()=>{setCharall((pre)=>!pre)}}></input>
                <label>Characters</label>
            </div>
            </div>
        </div>

        </>
    )
}
export default Passgen