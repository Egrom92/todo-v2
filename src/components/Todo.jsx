import React from 'react'

export default function Todo({onDelete, onDoneToggle, toDo}) {

    const deleteHandler = () => {
        onDelete(toDo)
    }
    const doneToggleHandler = () => {
        onDoneToggle(toDo)
    }

    return (
        <li className='todo'>
            <div className={`todo-item ${toDo.completed ? 'completed' : ''}`}>{toDo.text}</div>
                <button onClick={doneToggleHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
        </li>
    )
}