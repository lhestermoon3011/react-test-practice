import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const TodoList = (props) => {
  const { todo } = props;
   return (
    <>
      <ListItem>
        <ListItemText
          primary={todo.name}
        />
        <ListItemSecondaryAction>
          <IconButton size="small" edge="end" aria-label="Delete">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
    </>
  )
}

export default TodoList;
