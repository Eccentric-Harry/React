import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import User from './components/User.jsx'
import { Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { githubInfoLoader } from './components/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children:
//     [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       },
//       {
//         path: "github",
//         element: <Github/>
//       },
//       {
//         path:"user",
//         element: <User/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
