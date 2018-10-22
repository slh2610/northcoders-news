import React, { Component } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import * as api from '../api'
import './Nav.css'

class Nav extends Component {

  state = {
    topics: []
  }

  render() {
    const { username } = this.props
    return (
      <nav>
        <Link to="/" className="link">Home</Link>
        {this.state.topics.map(topic => {
          return <Link key={topic._id} to={`/topics/${topic.slug}/articles`} className="link">{topic.title}</Link>
        })}
        {username && <Link to={`/users/${username}`} className="link">{username}'s account</Link>}
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

Nav.propTypes = {
  username: PropTypes.string.isRequired
}

export default Nav