import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Content, StyledPaper } from "./TodoFormStyled";
import { useTodos } from "../../Context/TodoContext";

const TodoForm = () => {
   const inputRef = useRef<HTMLInputElement>(null); 
   const { addTodo, handleTouch, handleTypeAlert } = useTodos();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const currentTask = inputRef.current?.value || ""; 
     if (currentTask.trim()) {
        addTodo(currentTask);
        handleTouch(true);
        handleTypeAlert("success");
        if (inputRef.current) {
          inputRef.current.value = ""
        } 
     }
   };

    return (
      <form onSubmit={handleSubmit}>
        <StyledPaper elevation={3}>
          <Content>
            <TextField
              label="Add task"
              variant="outlined"
              fullWidth
              inputRef={inputRef}
            />
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Content>
        </StyledPaper>
      </form>
    );
}

export default TodoForm;
