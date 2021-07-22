import {ADD, REMOVE, TOGGLE, EDIT} from './boilerplate';

export default function(state, action)  {
    switch(action.type) {
        case ADD:
            return ([
                ...state,
                {
                    text: action.payload,
                    completed: false,
                    id: Math.round(Math.random() * 1000)
                }
            ]);
        case TOGGLE:
            return (
                state.map((el) => {
                    if (el.id === action.payload.id) {
                        return { ...el, completed: !el.completed };
                    }
                    return el;
                })
            );
        case REMOVE:
            return (state.filter((el) => el.id !== action.payload.id));
        case EDIT:
            return (
                state.map((el) => {
                    if (el.id === action.payload.point.id) {
                        return { ...el, text: action.payload.value };
                    }
                    return el;
                })
            );
        default:
            return state;
    }
}