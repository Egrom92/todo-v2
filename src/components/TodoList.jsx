import React from "react";
import Todo from "./Todo";

export default function TodoList({ onDoneToggle, onDelete, filteredTodos, onEdit }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((toDo) => (
          <Todo
            key={toDo.id}
            toDo={toDo}
            onDelete={onDelete}
            onDoneToggle={onDoneToggle}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}
