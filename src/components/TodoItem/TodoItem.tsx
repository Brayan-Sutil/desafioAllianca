import React from "react";
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", marginTop: "15px" }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon fontSize="medium" style={{marginRight: "10px"}}/>
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary={`Line item`} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default TodoItem;
