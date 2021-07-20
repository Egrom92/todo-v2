import React from 'react'
import Input from './Input';
import Filter from './Filter';

export default function Form({onInputText, onAddPoint, onStatusChange, status, inputText}) {

    const inputTextHandler = (e) => {
        onInputText(e.target.value)
    };
    const submitTodoHandler = () => {
        onAddPoint()
    };
    const statusHandler = (e) => {
        onStatusChange(e.target.value)
    }

    return (
        <div className="form">
            <Input inputTextHandler={inputTextHandler} submitTodoHandler={submitTodoHandler} inputText={inputText}/>
            <Filter statusHandler={statusHandler} status={status}/>
        </div>
    )
}