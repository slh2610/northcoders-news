import React, { Component } from 'react';
import { Router } from '@reach/router';
import * as api from './api';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';
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
          <Articles path="/" loggedIn={this.state.loggedIn} user={this.state.user} />
          <Articles path="/topics/:topic/articles" loggedIn={this.state.loggedIn} user={this.state.user} />
          <ArticleDisplay path="articles/:articleId" user={this.state.user} loggedIn={this.state.loggedIn} />
          <ErrorPage path="/error" />
          <ErrorPage default />
        </Router>

        <Footer />
      </div >
    );
  }

  componentDidMount() {
    const user = sessionStorage.getItem('username');
    if (user) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  fetchUser = (username) => {
    api.getUserByUsername(username)
      .then(data => {
        sessionStorage.setItem(username, data.username)
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
