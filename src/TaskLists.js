import React, { useContext } from 'react'
import Task from './Contexts/Task';
import { TaskListContext } from './Contextsi/TaskListProvider'

function TaskLists() {
    const { tasks } = useContext(TaskListContext);
    return (<>
        <div>TaskList</div>
        <ul className="list">
            {tasks.map((task) => {
                return <Task task={task}/>
            }
            )}
        </ul>

    </>
    )
}

export default TaskLists