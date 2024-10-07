import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TodoForm from '../components/TodoForm'
import TodoItems from '../components/TodoItems'
import { delTodo, getTodo, postTodo } from '../services/ApiEndPoint'
import toast from 'react-hot-toast'

const Home = () => {
  let [refresh, setRefresh] = useState(false)
  let [todos, setTodos] = useState([])


  useEffect( () => {
    let getTodos = async () => {
      let req = await getTodo("/todo/todos")
      console.log(req)
      let response = req.data
      console.log(response.todos)
      setTodos(response.todos)
      console.log(todos)
    }
    getTodos()
  }, [])

  useEffect(() => {
    let getTodos = async () => {
      let req = await getTodo("/todo/todos")
      console.log(req)
      let response = req.data
      console.log(response.todos)
      setTodos(response.todos)
      console.log(todos)
    }
    getTodos()
  }, [refresh])

  let [title, setTitle] = useState({
    title: "",
    isCompleted: false
  })

  let handleSetTitle = (e) => {
    setTitle(
      {
        title: e.target.value,
        isCompleted: false
      }
    )
  }

  let handleAdd = async (e) => {
    e.preventDefault()
    if (title.title == "") {
      toast.error("Input can not be empty")
      return
    }
    let req = await postTodo("/todo/create", title)
    let response = req.data
    setRefresh(!refresh)
    toast.success(response.message)
  }

  let handleDel = async (id) => {
    try {
      let req = await delTodo(`/todo/delete/${id}`)
      let response = req.data
      toast.success(response.message)
      setRefresh(prev => !prev)
    } catch (error) {
      toast.error("Unauthorized user")
    }
  }

  

  return (
    <div className='w-[100%] h-[100%] px-8 py-4 flex flex-col items-center'>
      <Navbar />
      <div className='mt-10 w-[30%] bg-slate-800 flex flex-col items-center p-6 rounded-2xl'>
        <TodoForm handleAdd={handleAdd} title={title} handleSetTitle={handleSetTitle} />
        {todos.map(item => (
          <div className='mt-6 w-full flex flex-col items-center' key={item._id}>
            <TodoItems title={item.title} handleDel={e => { handleDel(item._id) }} item={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
