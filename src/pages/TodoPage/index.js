import React, { Component } from 'react';
import { Container, Typography, Grid, List } from '@material-ui/core';
import TodoList from '../../components/TodoList/';
import TodoForm from '../../components/TodoForm';

class TodoPage extends Component {
  constructor() {
    super();

    this.state = {
      todoData: '',
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
          isCompleted: false,
        }, 
        ...this.state.todos,
      ],
    });
  }
  handleFinished(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    });

    this.setState({
      todos: [...updatedTodos],
    });
  }
  handleDelete(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }
  render() {
    const { todoData, todos } = this.state;

    return (
      <Container style={{marginTop: '1rem'}}>
        <Grid container>
          <Grid item md="4"/>
          <Grid item md="4">
            <TodoForm 
              todoData={todoData} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}/>
            {todos.length !== 0 ?
              <List style={{marginTop: '1rem'}}> 
              {todos.map((todo, i) => {
                return (
                  <TodoList 
                    key={i} 
                    todo={todo}
                    handleFinished={this.handleFinished}
                    handleDelete={this.handleDelete}/>
                )
              })}
              </List>
            :
              <Typography style={{marginTop: '1rem'}} align="center">No todos created yet.</Typography>
            }
          </Grid>
          <Grid item md="4"/>
        </Grid>
      </Container>
    )
  }
}

export default TodoPage;