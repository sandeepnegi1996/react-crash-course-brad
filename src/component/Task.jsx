import React from "react";

function Task({ key, text, day }) {
  return (
    <div className="task">
      <h3>{key}</h3>
      <p>{text}</p>
      <p>{day}</p>
    </div>
  );
}

export default Task;
