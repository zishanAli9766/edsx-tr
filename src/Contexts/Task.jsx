
import { TableRows } from '@mui/icons-material';
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'
import { useTasks } from './TaskProvider'

export default function Task({ id, task, complete,i }) {
 
  const { setStatusTask,handledelete } = useTasks()
console.log("asdf",id);
 
  const checkTask = e => setStatusTask(id, e.target.checked)

  return (
    <>   
     {/* <tr> 
      <td>
        <Checkbox type="checkbox"  onChange={checkTask} />
      </td>
      <td>
      
        <span className={ complete ? 'task-done' : '' }> { task.title }</span>
        <span className={ complete ? 'task-done' : '' }> { task.description }</span>
        <span className={ complete ? 'task-done' : '' }> { task.status }</span>
      </td>
        <button onClick={()=>handledelete(id)}>del</button>
    </tr> */}
    <TableContainer component={Paper}>
            <Table sx={{minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell >Sr.No</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Ststus</TableCell>
                        <TableCell >Del</TableCell>
                        <TableCell >Checked</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={ complete ? 'task-done' : '' }>{i+1}</TableCell>
                        <TableCell className={ complete ? 'task-done' : '' }>{ task.title }</TableCell>
                        <TableCell className={ complete ? 'task-done' : '' }>{ task.description }</TableCell>
                        <TableCell className={ complete ? 'task-done' : '' }>{ task.status }</TableCell>
                        <TableCell ><button onClick={()=>handledelete(id)}>del</button></TableCell>
                        <TableCell ><Checkbox type="checkbox"  onChange={checkTask} /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>

  )
}