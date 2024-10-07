import React from 'react'
import { postTodo } from '../services/ApiEndPoint'
import { useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setStatus } from '../slice/userSlice'

const Navbar = () => {
    let user = useSelector(state => state.userInfo);
    let dishpatch = useDispatch()
    let navigate = useNavigate()
    let handleLogout = async(e) => {
        e.preventDefault()
        try {
            let req = await postTodo("/auth/logout",{})
            let response = req.data
            toast.success(response.message)
            let status = false
            dishpatch(setStatus(false))
            navigate("/login")
        } catch (error) {
            
        }
    }
  return (
    <nav className='w-full h-14 bg-green-600 flex flex-row items-center justify-around border-b-[3px] border-yellow-300 sticky top-0 mb-4'>
      <h2 className='font-bold text-xl uppercase'>Welcome , {user.name.name}</h2>
      <button className='font-bold text-lg uppercase cursor-pointer bg-blue-700 text-white px-4 py-1 rounded-lg outline-none shadow-sm shadow-black hover:bg-blue-800' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar
