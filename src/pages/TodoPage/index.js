import React, { Component } from 'react';
import { Container, Typography, TextField, Grid, InputAdornment, IconButton, List, Divider } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import TodoList from '../../components/TodoList/';

class TodoPage extends Component {
  constructor() {
    super();

    this.state = {
      todoData: '',
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      todoData: '',
      todos: [
        {
          id: this.state.todos.length + 1,
          name: this.state.todoData,
          status: 'active',
        }, 
        ...this.state.todos,
      ],
    });
  }
  render() {
    const { todoData, todos } = this.state;
    console.log(todos);
    return (
      <Container style={{marginTop: '1rem'}}>
        <Grid container>
          <Grid item md="4"/>
          <Grid item md="4">
            <Typography variant="h3">Todo App</Typography>
            <form onSubmit={this.handleSubmit}>
              <TextField
                onChange={this.handleChange}
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
            <Divider/>
            {todos.length !== 0 ?
              <List> 
              {todos.map((todo, i) => {
                return <TodoList key={i} todo={todo}/>
              })}
              </List>
            :
            <Typography align="center">No todos created yet.</Typography>
            }
          </Grid>
          <Grid item md="4"/>
        </Grid>
      </Container>
    )
  }
}

export default TodoPage;