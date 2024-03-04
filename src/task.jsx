import React, { useState, useRef } from 'react'
import './styles/task.css'
import { v4 as uuidv4 } from 'uuid';

export const Task = () => {
    const [tasks, setTasks] = useState([]);
    console.log();
    
    const Task = ({ task, toggleTask }) => {       
        const handleTaskClick = () => {
            toggleTask(task.id);
        };
        
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className='delBtn' onClick={handleClear} style={{ marginRight: '10px' }}>削除</button>
                <label style={{ marginRight: '10px' }}>
                    <input type='checkbox' checked={task.completed} readOnly onChange={handleTaskClick} />
                </label>
                <div style={{ marginRight: '50px' }}>{task.name}</div>
            </div>
        )
    }

    const taskNameRef = useRef();

    const handleAddTask = () => {
        //タスク追加
        const name = taskNameRef.current.value;
        
        if (name === "") return; //タスクが未入力のときは追加しない

        setTasks((prevTask) => {
            return [...prevTask, { id: uuidv4(), name: name, completed: false }]
        })
        taskNameRef.current.value;

        localStorage.setItem('id', 'name')
    }

    const toggleTask = (id) => {
        const newTasks = [...tasks];
        const task = newTasks.find((task) => task.id === id);
        task.completed = !task.completed;
        setTasks(newTasks);
    }

    const handleClear = () => {
        //タスク削除
        const newTasks = tasks.filter((task) => !task.completed);
        setTasks(newTasks);
        localStorage.removeItem('id')
    }

    return (
        <>
            <div>Task</div>
            <input type='text' ref={taskNameRef} style={{ width: '300px', height: '30px' }} />
            <button className='addBtn' onClick={handleAddTask}>追加</button>
            <button className='delBtn' onClick={handleClear}>削除</button>
            <div>残りのタスク:{tasks.filter((task) => !task.completed).length}</div>
            { tasks.map((task) => <Task task={task} key={task.id} toggleTask={toggleTask} />) }
        </>
    )
}