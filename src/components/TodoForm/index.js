import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const TodoForm = (props) => {
  const { todoData, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={todoData}
        name="todoData"
        label="Add Todo"
        margin="normal"
        variant="outlined" 
        color="primary" 
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" edge="end">
                <Add/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
    </form>
  )
}

export default TodoForm;