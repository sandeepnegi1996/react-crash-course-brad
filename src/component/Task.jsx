import React from "react"
import { FaTimes } from "react-icons/fa"

function Task({ task, OnDelete, OnToggle }) {
  return (
    <div className='task' onDoubleClick={() => OnToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes color='red' size='50' onClick={() => OnDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
