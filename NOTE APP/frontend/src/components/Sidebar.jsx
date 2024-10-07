import React from 'react'
import { FaPlus } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='mt-3 mx-5'>
      <h1 className='fw-bold my-5 overflow-hidden'>LOGO</h1>
      <div className='rounded-circle d-flex justify-content-center align-items-center my-5' style = {{backgroundColor:"black",height:"50px",width:"50px",cursor:"pointer"}}>
        <FaPlus size={30} className='text-white' data-bs-toggle="modal" data-bs-target="#exampleModal"/>
      </div>
    </div>
  )
}

export default Sidebar
