import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaPen } from "react-icons/fa"
import { MdDelete } from "react-icons/md"



const Note = ({title , date, getNoteid , handleDel}) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <>
                <div className="card position-relative" style={{ width: "18rem", backgroundColor: "#FEC971" }}>
                    <div className="card-body position-relative">
                        <h5 className="card-title mb-5">{title}</h5>
                        <div className='bottomContent'>
                            <div className="date d-flex align-items-center justify-content-between">
                                <h5 className='note_date'>{date}</h5>
                                {show ? (<div className='dropdownbox'>
                                    <FaPen onClick={getNoteid} size={20} cursor={"pointer"} data-bs-toggle="modal" data-bs-target="#updateModal"/>
                                    <MdDelete onClick={handleDel} size={25} color='red' cursor={"pointer"}/>
                                </div>) : ""}
                                <div>
                                    <BsThreeDotsVertical className='fw-bold' style={{ cursor: "pointer" }} onClick={e => {
                                        setShow(prev => !prev)
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Note
