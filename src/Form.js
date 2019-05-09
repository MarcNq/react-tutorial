import React, {useReducer} from 'react'
import './Form.css'

// Events
const Name = (name) => ({type: 'Name', name})
const Password = (password) => ({type: 'Password', password})
const PasswordAgain = (password) => ({type: 'PasswordAgain', password})

// Initial State
const initialState = {
    name: '',
    password: '',
    passwordAgain: '',
}

// Update
const update = (state, event) => {
    switch (event.type) {
        case 'Name':
            return {...state, name: event.name}
        case 'Password':
            return {...state, password: event.password}
        case 'PasswordAgain':
            return {...state, passwordAgain: event.password}
        default:
            return state
    }
}

// View
export const TextInput = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={(domEvent) => props.onChange(domEvent.target.value)}
            />
        </div>
    )
}

export const Validation = (props) => {
    if (props.state.password === props.state.passwordAgain) {
        return (
            <span className="valid">
                OK
            </span>
        )
    } else {
        return (
            <span className="invalid">
                Passwords do not match!
            </span>
        )
    }
}

export const Form = () => {
    const [state, dispatch] = useReducer(update, initialState)

    return (
        <div>
            <TextInput value={state.name} onChange={(name) => dispatch(Name(name))}/>
            <TextInput value={state.password} onChange={(p) => dispatch(Password(p))}/>
            <TextInput value={state.passwordAgain} onChange={(p) => dispatch(PasswordAgain(p))}/>
            <Validation state={state}/>
        </div>
    )
}
