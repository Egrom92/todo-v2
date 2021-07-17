import React from 'react'

export default function Form({toDos, setToDos, setInputText, inputText}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setToDos([
            ...toDos,
            {text: inputText, completed: false, id: Math.round(Math.random() * 1000)}
        ])
        setInputText('')
    };

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}