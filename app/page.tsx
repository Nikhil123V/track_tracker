'use client'
import React, { useState } from 'react';

const Page = () => {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>([]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName.trim() !== '') {
     setTasks([...tasks, { name: taskName, completed: false }]);
      setTaskName('');
    }
  };

  interface Task {
    name: string;
    completed: boolean;
  }

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = tasks.map((task: Task, i: number) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <section className='justify-center items-center flex h-screen  bg-gray-300'>
      <div className='text-center'>
        <h1 className='font-bold text-3xl text-center'>Task Tracker</h1>
        <input 
          type="text" 
          className='border-2 border-blue-400 rounded-sm mt-4 max-w-2xl w-full' 
          placeholder='Add Task' 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button 
          className='bg-purple-600 rounded-sm  max-w-1xl w-full mt-1.5 text-white' 
          onClick={addTask} 
        >
          Add Task
        </button>
        <ul className='mt-4'>
          {tasks.map((task, index) => (
            <li key={index} className='flex justify-between items-center'>
              <span 
                className={`flex-1 ${task.completed ? 'line-through' : ''}`} 
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.name}
              </span>
              <button 
                className='bg-red-600 text-white rounded-sm px-2 py-1 ml-2' 
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;