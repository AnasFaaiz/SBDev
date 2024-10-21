import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks((prevTasks) => [...prevTasks, { name, done: false }]);
  };

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Tasks key={task.name} {...task} />
      ))}
    </main>
  );
}

export default App;
