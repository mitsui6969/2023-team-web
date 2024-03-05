import React, { useState, useRef, useEffect } from 'react'
import './styles/task.css'
import { v4 as uuidv4 } from 'uuid';

export const Task = () => {


    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(storedTasks);
    }, [] );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        const storedInput = localStorage.getItem('input') || '';
        setInput(storedInput);
    }, []);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);
        localStorage.setItem('input', inputValue);
    }

    const taskNameRef = useRef();

    const handleAddTask = () => {
        const name = input.trim();
        const id = uuidv4();


        if (name === "") return;


        setTodos((prevTasks) => {
            return [...prevTasks, { id: id, name: name, completed: false }]
        });
        
        setInput(''); // 入力内容をクリアする
        localStorage.removeItem('input'); // ローカルストレージから入力内容を削除する
    }

    const toggleTask = (id) => {
        const newTasks = [...todos];
        const task = newTasks.find((task) => task.id === id);
        task.completed = !task.completed;
        setTodos(newTasks);
    }

    const handleClear = (id) => {
        const newTasks = todos.filter((task) => task.id !== id);
        setTodos(newTasks);
    }

    return (
        <>
            <div>Task</div>
            <input type='text' value={input} onChange={handleInputChange} ref={taskNameRef} style={{ width: '300px', height: '30px' }} />
            <button className='addBtn' onClick={handleAddTask}>追加</button>
            <button className='delBtn' onClick={() => handleClear()}>削除</button>
            <div>残りのタスク:{todos.filter((task) => !task.completed).length}</div>
            { todos.map((task) => <TaskItem task={task} key={task.id} toggleTask={toggleTask} handleClear={handleClear} />) }
        </>
    )
}

const TaskItem = ({ task, toggleTask, handleClear }) => {
    const handleTaskClick = () => {
        toggleTask(task.id);
    };
    
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>
                <input type='checkbox' checked={task.completed} readOnly onChange={handleTaskClick} />
            </label>
            <div style={{ marginRight: '50px' }}>{task.name}</div>
            <button className='delBtn' onClick={() => handleClear(task.id)} style={{ marginRight: '10px' }}>削除</button>
        </div>
    )
}
