// 1
import React, { useEffect } from 'react'
import { useTasks } from './TaskProvider'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

export default function TaskList() {
  // 2
  const { List,handledelete,handleEdit } = useTasks()
  // useEffect(() => {
  //   console.log("useeffect", List);
  // }, [List])
  return (
   <>
   <div>
   <TableContainer component={Paper}>
            <Table sx={{width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell >Sr.No</TableCell>
                        <TableCell >Title</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Ststus</TableCell>
                        <TableCell >Del</TableCell>
                        <TableCell >Edit</TableCell>
                    </TableRow>
                </TableHead>
               {
                 List.map((item,i)=>{
                   return(
                     <>
                     <TableBody>
                    <TableRow>
                        <TableCell >{i+1}</TableCell>
                        <TableCell >{ item.title }</TableCell>
                        <TableCell >{ item.description }</TableCell>
                        <TableCell >{ item.status }</TableCell>
                        <TableCell ><button onClick={()=>handledelete(i)}>del</button></TableCell>
                        <TableCell ><button onClick={()=>handleEdit(item, i)}>edit</button></TableCell>
                    </TableRow>
                </TableBody>
                     </>
                   )
                 })
               }
            </Table>
        </TableContainer>
   </div>
   </>
  )
}