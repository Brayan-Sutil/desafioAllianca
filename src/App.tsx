import './App.css'
import { TodoProvider } from './Context/TodoProvider'
import Wapper from './components/Wapper/Wapper'

function App() {
  return (
    <TodoProvider>
      <Wapper/>
    </TodoProvider>
  )
}

export default App
