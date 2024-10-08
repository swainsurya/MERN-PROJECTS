import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from './components/Detail'
import Cart from "./components/Cart"
import { items } from './components/Data'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  let [data, setData] = useState([...items])
  let [cart, setCart] = useState([])
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Product items={data} cart={cart} setCart={setCart} />} />
          <Route path='/product/:id' element={<Detail cart = {cart} setCart = {setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
