import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
   addTodo: ['text'],
   toggleTodo: ['id'],
   removeTodo: ['id']
})

console.log(Types, Creators)

const initial = []

const add = (state = initial, action) => [ ...state, { id: Math.random(), text: action.text, complete: false } ]
const toggle = (state = initial, action) => state.map(todo => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
const remove = (state = initial, action) => state.filter(todo => todo.id !== action.id)

export default createReducer(initial, {
   [Types.ADD_TODO]: add,
   [Types.TOGGLE_TODO]: toggle,
   [Types.REMOVE_TODO]: remove
})