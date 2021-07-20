import React from 'react'

export default function customEvents(props) {
    return (
        <>

        </>
    )
}

const onInputText = content => {
    setInputText(content)
}
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