import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postTodo } from '../services/ApiEndPoint'
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setName, setStatus, setUserid } from '../slice/userSlice'

const Login = () => {
  let [loginData, setLoginData] = useState(
    {
      email: "",
      password: ""
    }
  )
  let dispatch = useDispatch()

  let navigate = useNavigate()

  let handleChange = (e) => {
    setLoginData(
      {
        ...loginData,
        [e.target.name]: e.target.value
      }
    )
  }

  let handleLogin = async (e) => {
    e.preventDefault()
    try {
      let req = await postTodo("/auth/login", loginData)
      let response = req.data
      let name = response.newUser.name
      let userId = response.newUser._id
      dispatch(setName({ name }))
      dispatch(setUserid({ userId }))
      toast.success(response.message)
      navigate('/')
      let status = true
      dispatch(setStatus(status))
    } catch (error) {
      let errMsg = error.response.data.message
      toast.error(errMsg)
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-[30%] h-[90%] bg-slate-400 rounded-md flex flex-col items-center justify-center'>
        <h2 className='font-bold text-3xl mb-10'>Login</h2>
        <form onSubmit={handleLogin} className='w-[80%] flex flex-col items-center justify-between'>
          <input onChange={handleChange} name='email' value={loginData.email} type="email" placeholder='Email' className='w-[100%] my-3 h-10 font-bold text-xl rounded-lg pl-5 outline-none ' />
          <input onChange={handleChange} name='password' value={loginData.password} type="password" placeholder='Password' className='w-[100%] my-3 h-10 font-bold text-xl rounded-lg pl-5 outline-none ' />
          <input type="submit" value="Login" className='w-[100%] bg-red-600 text-white font-bold text-2xl cursor-pointer p-3 mt-4 rounded-lg border-none outline-none hover:bg-red-700' />
        </form>
        <div className='mt-3 font-bold text-lg'><span>Don't have an account ? <Link to="/register" className='text-blue-600'>Register</Link></span></div>
      </div>
    </div>
  )
}

export default Login
