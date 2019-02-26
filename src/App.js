import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    if(this.props.hasvacancy) {
      return(
        <div>
          Vacancy
        </div>
      );
    } else {
      return(
        <div>
          No-Vacancy
        </div>);
    }
  }
}

export default App;
