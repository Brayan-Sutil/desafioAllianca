import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { Container } from "@mui/material";

const TodoList = () => {
  return (
    <Container maxWidth="md">
        <TodoForm/>
        <TodoItem/>
    </Container>
  )
};

export default TodoList;
