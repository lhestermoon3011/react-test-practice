import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TodoPage from './pages/TodoPage';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#5bc919'
    },
    secondary: {
      main: '#7cd447',
    },
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TodoPage/>
    </MuiThemeProvider>
  );
}

export default App;
