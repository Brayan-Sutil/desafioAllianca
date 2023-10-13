import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Content, StyledPaper } from "./TodoFormStyled";

const TodoForm = () => {
    return (
      <StyledPaper>
        <Content>
          <TextField label="Todo Task" variant="outlined" fullWidth/>
          <Button variant="contained">ADD</Button>
        </Content>
      </StyledPaper>
    );
}

export default TodoForm;