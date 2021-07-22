import { useReducer } from "react";
import reducer from '../reducer';
import {ADD, REMOVE, TOGGLE, EDIT} from '../boilerplate'

const useTodos = (initValue) => {

  const [state, dispatch] = useReducer(reducer, [])

  const addTodo = (value) => {
    dispatch({
      type: ADD,
      payload: value
    })
  };

  const doneToggle = (point) => {
    dispatch({
      type: TOGGLE,
      payload: point
    })
  };

  const remove = (point) => {
    dispatch({
      type: REMOVE,
      payload: point
    })
  };

  const edit = (point, value) => {
    dispatch({
      type: EDIT,
      payload: {point, value}
    })
  }

  return [state, addTodo, doneToggle, remove, edit];
};

export default useTodos;
