import React from "react"

import Task from "./Task"

import { useState } from "react"

function Tasks({ tasks, OnDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} OnDelete={OnDelete} />
      ))}
    </>
  )
}

export default Tasks
