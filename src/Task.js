import React from 'react'

const Task = ({task}) => {
  return (
      <>
    <div>{task.task}</div>
    <button>add </button>
      </>
  )
}

export default Task