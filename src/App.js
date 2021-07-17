import './App.css';
import React, {useState} from 'react'

import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {

    const [inputText, setInputText] = useState('')
    const [toDos, setToDos] = useState([])
    console.log(toDos)
  return (
    <div className="App">
        <header>
            <h1>Best ToDo</h1>
        </header>
        <Form inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}/>
        <TodoList/>
        
    </div>
  );
}

export default App;
