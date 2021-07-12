import React from "react";

import Task from "./Task";

import { useState } from "react";

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
