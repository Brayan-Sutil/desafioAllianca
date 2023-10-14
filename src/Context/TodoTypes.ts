export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (task: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

