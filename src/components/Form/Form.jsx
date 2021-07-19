import React from 'react'
import Input from './Input';
import Filter from './Filter';

export default function Form({status, setStatus, toDos, setToDos, setInputText, inputText}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setToDos([
            ...toDos,
            {text: inputText, completed: false, id: Math.round(Math.random() * 1000)}
        ])
        setInputText('')
    };
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <Input inputTextHandler={inputTextHandler} submitTodoHandler={submitTodoHandler} inputText={inputText}/>
            <Filter statusHandler={statusHandler} status={status}/>
        </form>
    )
}