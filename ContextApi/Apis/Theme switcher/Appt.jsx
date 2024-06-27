import React, { useEffect, useState } from 'react'
import ThemeBtn from './ThemeBtn'
import Card from './Card'
import { ThemeProvider } from '../../../contexts/theme'


function Appt() {
  // actual change in theme
  const[themeMode,setTheme]=useState("light")
  function darkTheme(){
    setTheme('dark')
  }
  function lightTheme(){
    setTheme('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4"> 
                  <ThemeBtn />
               </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default Appt