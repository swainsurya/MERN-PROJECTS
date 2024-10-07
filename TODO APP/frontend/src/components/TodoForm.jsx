import React, { useState } from 'react'
import { postTodo } from '../services/ApiEndPoint'
import toast from 'react-hot-toast'

const TodoForm = ({handleAdd , title , handleSetTitle}) => {

  return (
    <form onSubmit={handleAdd} className='mx-auto w-full flex items-center justify-between'>
        <input onChange={handleSetTitle} value={title.title } type="text" placeholder='Enter todo...' className='bg-transparent outline-none outline-4 outline-red-500 w-[80%] h-9 focus:outline-yellow-300 pl-4 placeholder:text-white text-white rounded-xl'/>
        <input type="submit" value="Add" className='bg-blue-700 px-4 py-2 outline-none text-white font-bold rounded-md cursor-pointer'/>
    </form>
  )
}

export default TodoForm
