import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id : 1,
        msg : "Learn Redux",
        completed : false
    }]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                msg : action.payload,
                completed : false
            }
            state.todos.push(newTodo);
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, ...action.payload} : todo);
        },
        toggleCompleted : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed : !todo.completed} : todo);
        }
    }
}
)

export const { addTodo, deleteTodo, updateTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;