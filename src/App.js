import React, { Component } from 'react';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Login from './components/Login';
import Chart from './components/Chart'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>Northcoder's News</h1></header>
        <Nav />
        <Login />
        <Chart />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
