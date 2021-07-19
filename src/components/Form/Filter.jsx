import React from 'react'

export default function Filter(props) {
    const {statusHandler, status} = props;
    return (
        <div className="select">
            <select onChange={statusHandler} name="todos" value={status} className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}