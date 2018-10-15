import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>Northcoder's News</p>
        </header>
        <nav>
          <p>Nav Bar</p>
        </nav>
        <button>
          login
        </button>
        <sidebar className="sidebar">
          <p>Popular articles</p>
        </sidebar>
        <main>
          <p>Body</p>
        </main>
        <footer>
          <p>extra info</p>
        </footer>
      </div>
    );
  }
}

export default App;
