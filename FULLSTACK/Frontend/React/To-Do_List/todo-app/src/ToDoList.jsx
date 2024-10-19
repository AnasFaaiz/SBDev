import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Study", "coding", "Play Games"]);
    const [newtasks, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);

    }

    function addTasks() {

        if (newtasks.trim() !== "") {
            setNewTasks(t => [...t, newtasks]);
            setNewTasks("");
        }

    }
    function deleteTasks(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTasks(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveDownTasks() {

        if (index < task.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);

            
        }
    }
    function moveUpTasks() {

    }

    return (
        <div classname="to-do-list">
            <h1>ToDo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a tasks.... "
                    value={newtasks}
                    onChange={handleInputChange} />

                <button
                    className="add-button" onclick={addTasks}>Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{tasks}</span>
                        <button
                            className="delete-button"
                            onclick={() => deleteTasks(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onclick={() => moveUpTasks(index)}>
                            UP
                        </button>
                        <button
                            className="move-button"
                            onclick={() => moveDownTasks(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default ToDoList