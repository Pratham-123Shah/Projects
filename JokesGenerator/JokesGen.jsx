import React, { useState } from "react";

const JokesGen=()=>{
    // const[joke,Setjoke]=useState([])
    // function fetching(){
    //   while(true){
    //   fetch('https://official-joke-api.appspot.com/random_joke')
    //   .then((res)=>{
    //     return res.json()
    //   }).then((data)=>{
    //     return data
    //     }).then((cng)=>{
    //       if(cng.type=="general"){
            
    //       }
    //     })
    // }

        async function joking(){
        const res=await fetch('https://official-joke-api.appspot.com/random_joke')
        
        const data=await res.json()
        console.log(data);
        Setjoke(data)
        console.log(res);
        const cng=res.json()
        console.log(cng);
        Setjoke(cng)
        console.log(joke);
        
    }
    joking()

    return(
          <>
            <h1>Generate Jokes and get giggles</h1>
            <button onClick={fetching}>Generate jokes</button>
            <p>{joke.setup} {joke.punchline}</p>
          </>
    )
}

export default JokesGen