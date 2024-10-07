import React from 'react'
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Home,Login,Register} from "./pages"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Toaster} from "react-hot-toast"


let router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register />
  }
])



const App = () => {
  return (
    <>
    <Toaster />
    <RouterProvider router={router} />
    </>
  )
}

export default App
