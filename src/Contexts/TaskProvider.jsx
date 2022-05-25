
import React, { createContext, useState, useContext } from 'react'
// import { v4 } from "uuid"


const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {

    const [List, setList] = useState([])
    const [Data, setData] = useState('')
    const [edit, setEdite] = useState(true);
    const [isEdit, setIsEdit] = useState(null)


    console.log("data",Data);
      const handleadd = (task) =>{
        if(!task){

        }else if(task && !edit){
            setList(
                List.map((item)=>{
                    if(item === isEdit){
                        return {...item,
                      title:task.title,
                     description: task.description,
                   status : task.status,}
                    }
                    return item;
                })
            )
            setEdite(true);
           setIsEdit(null)
        }else{
           setList([...List, {
            id: Date.now(),
            ...task,
            complete: false,
        }]);
       }
    }

    const handleEdit = (item, index) =>{
        let newEditItem = List[index]
        // newEditItem.findIndex((items) =>{
        //     return items.id === item.in;
        // });
        // console.log(newEditItem)
        setEdite(false);
        // setTask(newEditItem);
        console.log("newedititem",newEditItem);
        setIsEdit(item);
        setData(item);
    }

    

    const handledelete = (id) => {
        const del = List.filter((item, i) => i !== id);
        setList([...del])
    }

  
    return (
        <TaskContext.Provider value={{ List, handleadd,  handledelete, edit, setEdite, setIsEdit,handleEdit,Data }}>
            {children}
        </TaskContext.Provider>
    )
}