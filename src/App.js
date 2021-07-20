import './App.css';
import React, {useState, useEffect} from 'react'

import Form from './components/Form/Form';
import TodoList from './components/TodoList'


function App() {

    const [inputText, setInputText] = useState('');
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState('All');
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {filterHandler()}, [toDos, status])


    const onInputText = content => (
        setInputText(content)
    )
    const onAddPoint = () => {
        setToDos([
            ...toDos,
            {text: inputText, completed: false, id: Math.round(Math.random() * 1000)}
        ])
        setInputText('')
    }
    const onDoneToggle = (point) => {
        setToDos(toDos.map(el=> {
            if (el.id === point.id) {
                return {...el, completed: !el.completed}
            }
            return el;
        }))
    }
    const onDelete = (point) => {
        setToDos(toDos.filter((el)=> el.id !== point.id))
    }
    const onStatusChange = stat => {
        setStatus(stat)
    }


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
        <Form onInputText={onInputText} onAddPoint={onAddPoint} onStatusChange={onStatusChange} status={status} setStatus={setStatus} inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}/>
        <TodoList onDoneToggle={onDoneToggle} onDelete={onDelete} toDos={toDos} setToDos={setToDos} filterTodos={filterTodos}/>
        
    </div>
  );
}

export default App;
