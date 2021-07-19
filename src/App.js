import './App.css';
import React, {useState, useEffect} from 'react'

import Form from './components/Form/Form';
import TodoList from './components/TodoList'

if (typeof window !== 'undefined') {
    window.React = React;
}

function App() {

    const [inputText, setInputText] = useState('');
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState('All');
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {filterHandler()}, [toDos, status])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilterTodos(toDos.filter(todo => todo.completed))
                break;
            case 'uncompleted':
                setFilterTodos(toDos.filter(todo => !todo.completed))
                break;
            default:
                setFilterTodos(toDos)
                break;
        }
    };


  return (
    <div className="App">
        <header>
            <h1>Best ToDo</h1>
        </header>
        <Form status={status} setStatus={setStatus} inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}/>
        <TodoList toDos={toDos} setToDos={setToDos} filterTodos={filterTodos}/>
        
    </div>
  );
}

export default App;
