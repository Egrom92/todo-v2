import React from 'react'
import Todo from './Todo';

export default function TodoList({onDoneToggle, onDelete, filterTodos}) {


    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {filterTodos.map((toDo) => (
                    <Todo onDelete={onDelete} onDoneToggle={onDoneToggle} key={toDo.id} toDo={toDo}/>
                ))}
            </ul>
        </div>
    )
}