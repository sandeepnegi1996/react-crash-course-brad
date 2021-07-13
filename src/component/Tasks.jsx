import React from "react";

import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} day={task.daysk} />
      ))}
    </>
  );
}

export default Tasks;
