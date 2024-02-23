import React, { useState, useRef } from 'react'
import './styles/task.css'
import { v4 as uuidv4 } from 'uuid';

export const Task = () => {
    const [tasks, setTasks] = useState([{ id: 1, name: "Task1", completed: false }]);
    
    const Task = ({ task, toggleTask }) => {
        
        const handleTaskClick = () => {
            toggleTask(task.id);
        };
        
        return (
                <div>
                    <label>
                        < input type='checkbox' checked={task.completed} readOnly onChange={handleTaskClick} />
                    </label>
                    {task.name}
                </div>
            )
    }

    const taskNameRef = useRef();

    const handleAddTask = () => {
        //タスク追加
        const name = taskNameRef.current.value;
        setTasks((prevTask) => {
            return [...prevTask, { id: uuidv4(), name: name, completed: false }]
        })
        taskNameRef.current.value;
    }

    const toggleTask = (id) => {
        const newTasks = [...tasks];
        const task = newTasks.find((task) => task.id === id);
        task.completed = !task.completed;
        setTasks(newTasks);
    }

    return (
        <>
            <div>task</div>
            <input type='text' ref={taskNameRef}/>
            <button className='addBtn' onClick={handleAddTask}>追加</button>
            <button className='delBtn'>削除</button>
            <div>残りのタスク:0</div>
            { tasks.map((task) => <Task task={task} key={task.id} toggleTask={toggleTask} />) }
        </>
    )
}

