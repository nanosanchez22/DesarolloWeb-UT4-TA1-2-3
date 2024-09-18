import React from "react";

const TaskList = () => {
    const [tasks, setTasks] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = () => {
        
        if(inputValue.trim()){
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }

    const [editingIndex, setEditingIndex] = React.useState(null);
    const [editingValue, setEditingValue] = React.useState("");

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingValue(tasks[index]);
    }

    const handleEditingChange = (e) => {   
        setEditingValue(e.target.value);
    }

    const saveEditing = (index) => {
        const newTask = tasks.map((task, i) => (i === index ? editingValue : task));
        setTasks(newTask);
        setEditingIndex(null);
        setEditingValue("");
    }

    

    return(
        <div>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange} 
            />
            <button type="submit" onClick={onSubmit}>Add Task</button>


            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editingValue}
                                    onChange={handleEditingChange} 
                                />
                                <button onClick={() => saveEditing(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                {task}
                                <button onClick={() => startEditing(index)}>Edit</button>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>


{/*             <ul>
                {tasks.map((task) => (
                    <li>{task}</li>
                ))}

            </ul> */}
        </div>
    );

};
export default TaskList;