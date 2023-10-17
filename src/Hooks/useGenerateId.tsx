import { useRef } from "react";

function useGenerateId(): () => number {
  const savedTodos = localStorage.getItem("ListItem");
  const todosLength = savedTodos ? JSON.parse(savedTodos) : [];
  const endTodos = todosLength[todosLength.length - 1];
  const initialValue = todosLength.length > 0 ? endTodos.id : 0;
  const idRef = useRef(initialValue);

  return () => {
    idRef.current += 1;
    return idRef.current;
  };
}

export default useGenerateId;
