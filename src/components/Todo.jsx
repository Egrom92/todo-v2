import React, { useState } from "react";

export default function Todo({ onDelete, onDoneToggle, toDo, onEdit}) {
    console.log(toDo)
  const [editorMode, setEditorMode] = useState(false);
  const [value, setValue] = useState(toDo.text);

    const editHandler = () => {
        onEdit(toDo, value)
        setEditorMode(false)
    }

  if (editorMode) {
    return (
      <li className="todo">
        <input value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={editHandler} className="trash-btn">
          <i className="fas fa-save"></i>
        </button>
      </li>
    );
  }

  return (
    <li className="todo">
      <div className={`todo-item ${toDo.completed ? "completed" : ""}`}>
        {toDo.text}
      </div>
      <button onClick={() => onDoneToggle(toDo)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => onDelete(toDo)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={() => setEditorMode(true)} className="trash-btn">
        <i className="fas fa-pen"></i>
      </button>
    </li>
  );
}
