import "./App.css";
import { useState, useMemo } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import useTodos from "./hooks/useTodos";

function App() {
  const [status, setStatus] = useState("All");
  const [toDos, addTodo, doneToggle, remove, edit] = useTodos();

  const filteredTodos = useMemo(() => {
    if (status === "completed") {
      return toDos.filter((todo) => todo.completed);
    }

    if (status === "uncompleted") {
      return toDos.filter((todo) => !todo.completed);
    }

    return toDos;
  }, [status, toDos]);

  return (
    <div className="App">
      <header>
        <h1>Best ToDo</h1>
      </header>

      <Form onValue={addTodo}>
        <Filter onStatusChange={setStatus} status={status} />
      </Form>

      <TodoList
        onDoneToggle={doneToggle}
        onDelete={remove}
        onEdit={edit}
        toDos={toDos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
