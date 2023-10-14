import { createContext, useContext } from "react";
import { TodoContextProps } from "./TodoTypes";

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos deve ser usado dentro de um TodoProvider");
  }
  return context;
}

export default TodoContext;
