import React from "react"
import { FaTimes } from "react-icons/fa"

function Task({ task, OnDelete }) {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes color='red' size='50' onClick={() => OnDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
