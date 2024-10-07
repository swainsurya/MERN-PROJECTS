import React, { useEffect } from 'react'
import { useState } from 'react'

const TodoItems = ({ item, title, handleDel }) => {
    let [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        setIsComplete(item.isCompleted)
    },[])

    let handleComplete = (item) => {
        setIsComplete(prev => !prev)
        item.isCompleted = !item.isCompleted
    }
    return (
        <div className={`w-full flex items-center bg-green-500 justify-between px-4 py-2 mt-3 ${isComplete ? "line-through bg-yellow-300" : ""}`}>
            <div>
                <input type="checkbox"
                    onChange={e => handleComplete(item)}
                    checked={isComplete}
                />
                <input type="text" value={title} readOnly className='bg-transparent ml-3 cursor-pointer outline-none font-bold' />
            </div>
            <button onClick={handleDel} className='text-red-600 font-bold outline-none cursor-pointer'>DELETE</button>
        </div>
    )
}

export default TodoItems
