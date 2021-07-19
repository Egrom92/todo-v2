import React from 'react'

export default function Input(props) {
    const {inputTextHandler, submitTodoHandler, inputText} = props
    return (
        <>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </>
    )
}