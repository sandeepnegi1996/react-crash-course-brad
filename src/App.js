import Header from "./component/Header.jsx"
import css from "./index.css"
import Tasks from "./component/Tasks"

import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "first todo",
      day: "12th july 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "second todo",
      day: "12th july 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "third todo",
      day: "12th july 2021",
      reminder: true,
    },
  ])

  const deleteTask=(id) => {

    setTasks(tasks.filter((task)=>task.id!==id));

     console.log("Task is deleted ",id)
  }

  return (
    <div>
      <Header title='Task Tracker' taskNumber='5' />
      <Tasks tasks={tasks} OnDelete={deleteTask} />
    </div>
  )
}

export default App
