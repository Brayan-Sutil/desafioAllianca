export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoContextProps {
  todos: Todo[];
  onAlert: boolean;
  typeAlert: string;
  handleTypeAlert: ( type: string ) => void;
  handleTouch: (state: boolean) => void;
  addTodo: (task: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

