import React, { Component } from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <HomePage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
