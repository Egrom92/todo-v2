import React from 'react'

export default function Todo({toDo, toDos, setToDos}) {

    const deleteHandler = () => {
        setToDos(toDos.filter((el)=> el.id !== toDo.id))
    }
    const completedHAndler = () => {
        setToDos(toDos.map(el=> {
           if (el.id === toDo.id) {
               return {...el, completed: !el.completed}
           }
           return el;
        }))

    }

    return (
        <li className='todo'>
            <div className={`todo-item ${toDo.completed ? 'completed' : ''}`}>{toDo.text}</div>
                <button onClick={completedHAndler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
        </li>
    )
}