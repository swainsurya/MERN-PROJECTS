import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postTodo } from '../services/ApiEndPoint'
import toast from 'react-hot-toast'

const Register = () => {

  let [userData, setUserData] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )

  let navigate = useNavigate()

  let handleChange = (e) => {
    setUserData(
      {
        ...userData,
        [e.target.name]: e.target.value
      }
    )
  }

  let handleRegister = async (e) => {
    e.preventDefault()
    try {
      console.log(userData)
      let req = await postTodo("/auth/register", userData)
      let response = req.data
      toast.success(response.message)
      setTimeout(() => {
        navigate('/login')
      },2000)
    } catch (error) {
      let errMsg = error.response.data.message
      toast.error(errMsg)
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-[30%] h-[90%] bg-slate-400 rounded-md flex flex-col items-center justify-center'>
        <h2 className='font-bold text-3xl mb-10'>Register</h2>
        <form onSubmit={handleRegister} className='w-[80%] flex flex-col items-center justify-between'>
          <input type="text" placeholder='Username' name='name' className='w-[100%] my-3 h-10 font-bold text-xl rounded-lg pl-5 outline-none ' onChange={handleChange} value={userData.name} />
          <input type="email" placeholder='Email' name='email' className='w-[100%] my-3 h-10 font-bold text-xl rounded-lg pl-5 outline-none ' onChange={handleChange} value={userData.email} />
          <input type="password" placeholder='Password' name='password' className='w-[100%] my-3 h-10 font-bold text-xl rounded-lg pl-5 outline-none ' onChange={handleChange} value={userData.password} />
          <input type="submit" value="Register" className='w-[100%] bg-red-600 text-white font-bold text-2xl cursor-pointer p-3 mt-4 rounded-lg border-none outline-none hover:bg-red-700' />
        </form>
        <div className='mt-3 font-bold text-lg'><span>Already have an account ? <Link to="/login" className='text-blue-600'>Login</Link></span></div>
      </div>
    </div>
  )
}

export default Register
