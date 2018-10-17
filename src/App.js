import React, { Component } from 'react';
import { Router } from '@reach/router';
import * as api from './api';
import Nav from './components/Nav';
import Articles from './components/Articles';
import ArticleDisplay from './components/ArticleDisplay';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

class App extends Component {

  state = {
    user: {},
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        <header><h1>Northcoder's News</h1></header>
        <Nav user={this.state.user} />
        <Login fetchUser={this.fetchUser} user={this.state.user} loggedIn={this.state.loggedIn} logout={this.logout} />
        <Router className="articles">
          <Articles path="/" />
          <Articles path="/topics/:topic/articles" loggedIn={this.state.loggedIn} user={this.state.user} />
          <ArticleDisplay path="articles/:articleId" user={this.state.user} loggedIn={this.state.loggedIn} />
        </Router>
        <Footer />
      </div >
    );
  }

  fetchUser = (username) => {
    api.getUserByUsername(username)
      .then(data => {
        this.setState({
          user: data,
          loggedIn: true
        })
      })
  }

  logout = () => {
    this.setState({
      user: {},
      loggedIn: false
    })
  }
}

export default App;
