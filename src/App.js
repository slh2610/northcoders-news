import React, { Component } from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import Articles from './components/Articles';
import ArticleDisplay from './components/ArticleDisplay';
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
        <Router>
          <Articles path="/" />
          <Articles path="/topics/:topic/articles" />
          <ArticleDisplay path="articles/:articleId" />
        </Router>

        <Footer />
      </div >
    );
  }
}

export default App;
