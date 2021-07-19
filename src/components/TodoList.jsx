import React from 'react'
import Todo from './Todo';

export default function TodoList({toDos, setToDos, filterTodos}) {

    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {filterTodos.map((toDo) => (
                    <Todo toDos={toDos} setToDos={setToDos} key={toDo.id} toDo={toDo}/>
                ))}
            </ul>
        </div>
    )
}