import {useState} from "react";

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(() => [...tasks, newTask])
            setNewTask(null)
        }
    }

    const deleteTask = (index) => {
        const updateTasks = tasks.filter((_, i) => i !== index)
        setTasks(updateTasks);
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>Todo List</h1>
            <div>
                <input type="text" placeholder="enter a task ..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>add</button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    )
}