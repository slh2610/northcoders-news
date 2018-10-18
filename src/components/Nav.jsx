import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api'
import './Nav.css'

class Nav extends Component {

  state = {
    topics: []
  }

  render() {
    return (
      <nav>
        <Link to="/" className="link">Home</Link>
        {this.state.topics.map(topic => {
          return <Link key={topic._id} to={`/topics/${topic.slug}/articles`} className="link">{topic.title}</Link>
        })}
      </nav>
    )
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.getTopics()
      .then(topics => {
        this.setState({
          topics
        });
      });
  };
}

export default Nav