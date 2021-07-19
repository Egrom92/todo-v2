import React from 'react'

export default function Form({status, setStatus, toDos, setToDos, setInputText, inputText}) {

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
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" value={status} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}