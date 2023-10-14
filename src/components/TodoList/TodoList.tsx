import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { Container, Typography } from "@mui/material";
import { useTodos } from "../../Context/TodoContext";

const TodoList = () => {
  const { todos } = useTodos();
  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <Typography fontSize={25} fontWeight={600} >Todo List</Typography>
      <TodoForm />
      {todos.length < 1 ? (
        <Typography fontSize={20} marginTop={2}>You don't have a task</Typography>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </Container>
  );
};

export default TodoList;
