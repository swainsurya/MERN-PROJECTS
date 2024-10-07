import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { post } from '../../services/Apiendpoint'
import toast from 'react-hot-toast'

const Register = () => {
  let [value, setValue] = useState(
    {
      username: "",
      email: "",
      password: ""
    }
  )

  let handleChange = (e) => {
    setValue(
      {
        ...value,
        [e.target.name]: e.target.value
      }
    )
  }

  let handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const req = await post("/auth/register",value)
      let response = req.data
      if(response.success) {
        toast.success(response.message)
      }
    } catch (error) {
      let errmsg = error.response.data
      toast.error(errmsg.message)
    }
  }

  return (
    <>
      <div className='container-fluid vw-100 vh-100 d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: 'lightgray' }}>
        <div style={{ width: "30%", height: "80%", backgroundColor: "white" }} className='loginContainer'>
          <h1 className='mb-3'>Register</h1>
          <form onSubmit={handleSubmit} className='login_inputs d-flex flex-column align-items-center justify-content-between'>
            <input value={value.username} onChange={handleChange} name='username' type="text" placeholder='Enter name' className='mb-4' />
            <input value={value.email} onChange={handleChange} name='email' type="email" placeholder='Enter email id' className='mb-4' />
            <input value={value.password} onChange={handleChange} name='password' type="password" placeholder='Enter password' className='' />
            <button className='btn btn-info mt-4' type="submit">Register</button>
          </form>
          <span className='fw-bold fs-5 mt-3'>Already have an account ? <Link to="/login" className='signuplink'>Login</Link></span>
        </div>
      </div>
    </>
  )
}

export default Register
