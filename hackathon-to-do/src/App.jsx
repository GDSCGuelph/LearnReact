import React, { useState } from 'react';
import './App.css';
export default function App() {
        const [tasks, setTasks] = useState([]);
        const [inputValue, setInputValue] = useState('');
        
        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        }
        
        const handleAddTask = () => {
            if (inputValue.trim()) {
                setTasks([...tasks, inputValue]);
                setInputValue('');
            }
        };
        
        const handleDeleteTask = (index) => {
            const newTaskList = tasks.filter((task, i) => i !== index);
            setTasks(newTaskList)
        }
        
        return (
            <>
                <div className="list">
                    <h1>Hackathon To-Do 📝</h1>
                </div>
                <div className="input">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeHolder="Add a task"
                    />
                    <button onClick={handleAddTask}>Add</button>
                </div>
                <ul>
                    {tasks.map((task, index) => {
                        return (
                        <li key={index} className='task-item'>
                            {task}
                            <div className='task-actions'>
                                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            </div>
                        </li>
                        )
                    })}
                </ul>
        </>
    );   
}