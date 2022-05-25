// 1
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import MainCustom from '../CustomComp/MainCustom'
import { useTasks } from './TaskProvider'

export default function NewTaskForm() {
  // 2
  const [task, setTask] = useState({})
  
  const { handleadd,handleEdit, Data } = useTasks()

  // 3
  const submit = e => {
    e.preventDefault()
    console.log("taskhandle",task);
    handleadd(task)
    e.target.reset();
    setTask('');
  }

  useEffect(() => {
    if(Data) {
      setTask(Data);
    }
  }, [Data])
  

  return (
  
    <form onSubmit={submit}>
    
    <TextField type="text" value={task.title} label="Title"  onChange={(e)=> setTask({
      ...task,
      title: e.target.value,
    })} required />   
     <TextField type="text" value={task.description} label="Description" onChange={(e)=> setTask({
      ...task,
      description: e.target.value,
    })} required />    
     <TextField type="text" value={task.status} label="status" onChange={(e)=> setTask({
      ...task,
      status: e.target.value,
    })} required />
      <Button type='submit' style={{color:"aqua",height:60,marginLeft:10,}}>ADD</Button>
      {/* <MainCustom title='ADD' type='b' color='aqua' height="60px" /> */}
     
    </form>
  )
}