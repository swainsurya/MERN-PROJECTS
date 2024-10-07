import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Home , Login , Register} from './pages'
import {Toaster} from "react-hot-toast"
import { useSelector } from 'react-redux'

const App = () => {

  let userSel = useSelector(state => state.userInfo)

  let router = createBrowserRouter([
    {
      path : "/",
      element : userSel.status ? <Home/> : <Login /> 
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/register",
      element : <Register />
    }
  ])

  return (
    <>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
    </>
  )
}

export default App
