import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './components/AddTodo'
import TodoList from './components/Todos'
import './App.css'

function App() {

  const todos = useSelector((state) => state.todos)

  return (
    <>
    <AddTodo />
    {todos.map((todo) => (
      <TodoList key={todo.id} todo={todo} />
    ))}
    </>
  )
}

export default App
