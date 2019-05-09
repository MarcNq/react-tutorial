import React, {useReducer} from 'react'


// Initial State
const initialState = 0

// Update
const update = (state, event) => {
    switch (event.type) {
        case 'Increment': return state + 1
        case 'Decrement': return state - 1
        default: return state
    }
}

// View
export const Counter = () => {
    const [state, dispatch] = useReducer(update, initialState)

    return (
        <div>
            <button onClick={() => dispatch('Increment')}>+</button>
            <button onClick={() => dispatch('Decrement')}>-</button>
            <span>{state}</span>
        </div>
    )
}
