import './App.css'
import TodoList from './components/TodoList/TodoList'
import { TodoProvider } from './Context/TodoProvider'

function App() {
  return (
    <TodoProvider>
       <TodoList/>
    </TodoProvider>
  )
}

export default App
