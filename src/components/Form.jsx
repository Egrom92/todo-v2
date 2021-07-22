import React, { useCallback, useState } from "react";

export default function Form(props) {
  const { onValue, children } = props;

  const [value, setValue] = useState("");

  const clickHandler = useCallback(() => {
    onValue(value);
    setValue("");
  }, [onValue, value]);

  return (
    <div className="form">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="todo-input"
      />

      <button onClick={clickHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      {children}
    </div>
  );
}
