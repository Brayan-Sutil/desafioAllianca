import { useState, ReactNode } from "react";
import TodoContext from "./TodoContext";
import { Todo } from "./TodoTypes";
import useGenerateId from "../Hooks/useGenerateId";

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const savedTodos = localStorage.getItem("ListItem");
  const todosLength = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(todosLength);    
  const generateId = useGenerateId();
  localStorage.setItem("ListItem", JSON.stringify(todos));

  const addTodo = (task: string) => {
    const newTodo = { id: generateId(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodosToggleTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodosToggleTodo);
  };

  const deleteTodo = (id: number) => {
    const updatedTodosDeleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodosDeleteTodo);
  };

  return (
    <TodoContext.Provider 
    value={{ 
      todos, 
      addTodo, 
      toggleTodo, 
      deleteTodo 
    }}>
      {children}
    </TodoContext.Provider>
  );
}
