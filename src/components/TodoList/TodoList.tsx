import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { Container } from "@mui/material";

const TodoList = () => {
  return (
    <Container maxWidth="sm">
      <TodoForm />
      <TodoItem />
    </Container>
  );
};

export default TodoList;
