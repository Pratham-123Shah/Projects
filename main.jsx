import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Bgcolor from './Bgcolor.jsx'
import Passgen from './Passgen.jsx'
import Ref from './Ref.jsx'
import Currency from './Currency.jsx'
import Header from './ReactRouter/Components/Header.jsx'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Footer from './ReactRouter/Components/Footer.jsx'
import Home from './ReactRouter/Components/Home.jsx'
import JokesGen from './MyProjects/JokesGen.jsx'
import Layout from './ReactRouter/Components/Layout.jsx'
import About from './ReactRouter/Components/About.jsx'
import Contact from './ReactRouter/Components/Contact.jsx'
import User from './ReactRouter/Components/User.jsx'
import Github, { gitloader } from './ReactRouter/Components/Github.jsx'
import Counter from './ContextApi/Apis/Counter.jsx'
import ContextProvider from './ContextApi/Apis/ContextProvider.jsx'
import App2 from './ContextApi/Apis/App2.jsx'
import App21 from './ContextApi/Apis/Cart example/App21.jsx'
import CartContextProvider from './ContextApi/Apis/Cart example/CartContextProvider.jsx'
import Appt from './ContextApi/Apis/Theme switcher/Appt.jsx'


function Myapp(){
  return(
    <div>
      <h1> Pratham Shah hu main</h1>
    </div>
  )
}
// babel conversion
const user=":prath"
const Elem=React.createElement("a",{href:"https//google.com"},"click me to visit",user)
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   },
//   {
//     path:'/layout',
//     element:<Home/>
//   }
// ])

// another way
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}></Route>
//       <Route path='about/' element={<About/>}>
//         <Route path='prath' element={<Github/>}></Route>          
//       </Route>
//       <Route path='contact' element={<Contact/>}></Route>
//       <Route path='user/:id' element={<User/>}></Route>
//       <Route path='github' element={<Github/>} loader={gitloader}></Route>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // Myapp()---> you can write but not a good practice
    // Elem
  //  <Bgcolor/>
  // <Passgen/>
  // <Ref/>
  // <Currency/>
  // <BrowserRouter>
  //   <Header/>
  //   <Home/>
  //   <Footer/>
  // </BrowserRouter>
  // <RouterProvider router={router}/>
  // <JokesGen/>
  // <>
  //  <ContextProvider>
  //   <App2/>
  //   </ContextProvider>
  // </>
  // <CartContextProvider>
  //   <App21/>
  // </CartContextProvider>
  <Appt/>
  
)
