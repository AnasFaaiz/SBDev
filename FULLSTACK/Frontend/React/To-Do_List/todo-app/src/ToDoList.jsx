import React, { useState } from 'react'

function ToDoList() {
    
    const [tasks, setTasks] = useState([]);
    const [newtasks, setNewTasks] = useState("");
    
    function handleInputChange(event){

    }

    function addTasks(){

    }
    function deleteTasks(index){

    }

    function editTasks(){

    }

    function moveDownTasks(){

    }
    function moveUpTasks(){

    }

    return(
        <div classname="to-do-list">
            <h1>ToDo List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a tasks.... "
                    value={newtasks}
                    onChange={handleInputChange}/>
            </div>

        </div>
    );
}
export default ToDoList