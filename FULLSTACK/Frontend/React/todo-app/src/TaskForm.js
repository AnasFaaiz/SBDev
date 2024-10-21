import {useState} from "react";

export default function TaskForm(){
    const [TaskName, setTaskName] = useState('');
    return (
        <form>
        <button>+</button>
        <input type="text" value={TaskName}
            onChange={ev => setTaskName(ev.target.value)}
            placeholder="New Task...."/>
      </form>
    );
}