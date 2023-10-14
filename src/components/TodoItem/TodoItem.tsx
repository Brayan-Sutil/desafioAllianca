import React from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  List,
} from "@mui/material";
import { useTodos } from "../../Context/TodoContext";
import {  IconDelete } from "./TodoItemStyled";

interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
}

const TodoItem = ({ id, task, completed }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodos();
  return (
    <Paper elevation={3}>
      <List sx={{ width: "100%", bgcolor: "background.paper", marginTop: "15px" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => deleteTodo(id)}
            >
              <IconDelete fontSize="medium" />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                checked={completed}
                onChange={() => toggleTodo(id)}
              />
            </ListItemIcon>
            <ListItemText primary={`${task}`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default TodoItem;
