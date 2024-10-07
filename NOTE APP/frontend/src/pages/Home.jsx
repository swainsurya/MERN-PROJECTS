import React, { useEffect, useState } from 'react'
import { Navbar, Note, Notemodals, Sidebar, UpdateModals } from '../components'
import { del, get, post, put } from '../../services/Apiendpoint'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let [notes, setNotes] = useState([])
  let [title, setNoteTitle] = useState("")
  let [refresh, setRefresh] = useState(false)


  let [updatenote, setUpdateNote] = useState("")
  let [noteid, setNoteId] = useState(null)

  let navigate = useNavigate()


  useEffect(() => {
    let getNotes = async () => {
      try {
        let req = await get("/notes/getnotes")
        let response = req.data
        console.log(response);
        setNotes(response.allNotes)
        console.log(notes);
      } catch (error) {
        console.log(error);
      }
    }
    getNotes()
  }, [])
  useEffect(() => {
    let getNotes = async () => {
      try {
        let req = await get("/notes/getnotes")
        let response = req.data
        console.log(response);
        setNotes(response.allNotes)
        console.log(notes);
      } catch (error) {
        console.log(error);
      }
    }
    getNotes()
  }, [refresh])

  let handleCreateNote = async () => {
    if (title == "") {
      toast.error("Title should not be empty")
      return
    }
    try {
      let req = await post("/notes/createnotes", { title })
      let response = req.data
      if (response.success) {
        toast.success(response.message)
        setRefresh(prev => !prev)
      }
    } catch (error) {
      let errmsg = error.response.data
      toast.error(errmsg.message)
    }
  }

  let handleUpdate = async () => {
    if (updatenote == "") {
      toast.error("This field can not be empty")
      return
    }
    try {
      let req = await put(`/notes/updatenotes/${noteid}`, { title: updatenote })
      let response = req.data
      if (response.success) {
        toast.success(response.message)
        setRefresh(prev => !prev)
      }
    } catch (error) {
      let errmsg = error.response.data
      toast.error(errmsg.message)
    }
  }

  let handleDel = async (id) => {
    try {
      let req = await del(`/notes/deletenotes/${id}`)
      let response = req.data
      if (response.success) {
        toast.success(response.message)
        setRefresh(prev => !prev)
      }
    } catch (error) {
      let errmsg = error.response.data
      toast.error(errmsg.message)
    }
  }

  let handleLogout = async() => {
    try {
      let req = await post("/auth/logout")
      let response = req.data
      if(response.success) {
        toast.success(response.message)
        navigate("/login")
      }
    } catch (error) {
      let errmsg = error.response.data
      toast.error(errmsg.message)
    }
  }

  return (
    <>
      <Notemodals handleTitleChange={e => setNoteTitle(e.target.value)} handleCreateNote={handleCreateNote} value={title} title={"Create Notes"} />
      <UpdateModals title="Update Notes" value={updatenote} handleTitleChange={e => setUpdateNote(e.target.value)} handleUpdate={handleUpdate} />
      <div className='container-fluid0'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
            <Sidebar />
          </div>
          <div className="col-lg-10 col-col-md-10">
            <Navbar handleLogout={handleLogout} />
            <div className='my-3 mx-5'>
              <h1 className='fs-3 fw-bold overflow-hidden'>NOTES</h1>
            </div>
            <div className="row my-4 mx-5">
              {notes.map(item => {
                let date = new Date(item.createdAt)
                let noteDate = date.toLocaleDateString()
                return (
                  <div className='col-md-4 col-lg-4 my-2' key={item.id}>
                    <Note date={noteDate} title={item.title} getNoteid={() => setNoteId(item._id)} handleDel={() => { handleDel(item._id) }} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
