import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Tooltip, Typography } from '@material-ui/core';
import { Delete, Check } from '@material-ui/icons';

const TodoList = (props) => {
  const { todo, handleFinished, handleDelete } = props;
   return (
    <>
      <ListItem>
        <ListItemText
          primary={<Typography style={todo.isCompleted ? { textDecoration: 'line-through' } : null }>{todo.name}</Typography>}
        />
        <ListItemSecondaryAction>
        <Tooltip title="Mark" placement="bottom">
            <IconButton onClick={() => handleFinished(todo.id)}>
              <Check />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove" placement="bottom">
            <IconButton onClick={() => handleDelete(todo.id)} size="small" edge="end" aria-label="Delete">
              <Delete />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
    </>
  )
}

export default TodoList;
