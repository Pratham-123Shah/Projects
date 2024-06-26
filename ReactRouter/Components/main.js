import Header from './ReactRouter/Components/Header.jsx'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Footer from './ReactRouter/Components/Footer.jsx'
import Home from './ReactRouter/Components/Home.jsx'
import Layout from './ReactRouter/Components/Layout.jsx'
import About from './ReactRouter/Components/About.jsx'
import Contact from './ReactRouter/Components/Contact.jsx'
import User from './ReactRouter/Components/User.jsx'
import Github, { gitloader } from './ReactRouter/Components/Github.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  },
  {
    path:'/layout',
    element:<Home/>
  }
])


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
