import React from "react";

export default function Filter(props) {
  const { onStatusChange, status } = props;
  const test = 'test';

  return (
    <div className="select">
      <select
        onChange={(e) => onStatusChange(e.target.value)}
        name="todos"
        value={status}
        test={test}
        className="filter-todo"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
