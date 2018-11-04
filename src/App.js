import React, { Component } from 'react';
import { Router } from '@reach/router';
import * as api from './api';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';
import UsersPage from './components/UsersPage';
import Articles from './components/Articles';
import ArticleDisplay from './components/ArticleDisplay';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

class App extends Component {
  state = {
    user: {},
    loggedIn: false,
    err: null
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>-NORTHCODERS NEWS-</h1>
        </header>
        <Nav username={this.state.user.username} />
        <Login
          fetchUser={this.fetchUser}
          user={this.state.user}
          loggedIn={this.state.loggedIn}
          err={this.state.err}
          logout={this.logout}
          backToLogin={this.backToLogin}
        />

        <Router className="articles">
          <Articles
            path="/"
            loggedIn={this.state.loggedIn}
            user={this.state.user}
          />
          <Articles
            path="/topics/:topic/articles"
            loggedIn={this.state.loggedIn}
            user={this.state.user}
          />
          <ArticleDisplay
            path="articles/:articleId"
            user={this.state.user}
            loggedIn={this.state.loggedIn}
          />
          <UsersPage path="users/:username" user={this.state.user} />
          <ErrorPage path="/error" />
          <ErrorPage default />
        </Router>

        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }

  fetchUser = username => {
    api
      .getUserByUsername(username)
      .then(data => {
        this.setState({
          user: data,
          loggedIn: true
        });
      })
      .catch(err => {
        this.setState({
          loggedIn: 'Invalid Username',
          err: err
        });
      });

    localStorage.setItem('user', JSON.stringify(this.state.user));
  };

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  backToLogin = () => {
    this.setState({
      loggedIn: false,
      err: null
    });
  };

  logout = () => {
    this.setState({
      user: {},
      loggedIn: false
    });
  };
}

export default App;
