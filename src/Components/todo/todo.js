import React, { useState } from "react";
import "./todo.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleAddTodo() {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function crossLine (event){
        const element = event.target;
        element.classList.add("crossed-line")
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="input-group">
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </div>
                <button onClick={handleAddTodo}>Add Todo</button>
            
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span onClick={(e)=>crossLine(e)}>{todo}</span>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <div>&nbsp;</div>
                        {/* <button onClick={(e)=>crossLine(e)}>Complete</button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
