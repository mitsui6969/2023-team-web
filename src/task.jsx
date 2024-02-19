import React, { useState } from 'react'
import './styles/task.css'

export const Task = () => {
    const [tasks, setTasks] = useState(["task1", "task2"]);
    
    const Task = ({task}) => {
        return <div>{task}</div>
    }

    return (
        <>
            <div>task</div>
            <input type='text'/>
            <button className='addButton'>追加</button>
            <button className='delButton'>削除</button>
            <div>残りのタスク:0</div>
            { tasks.map((task) => <Task task={task} key={task} />) }
        </>
    )
}

