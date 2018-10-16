import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VotingTool from './VotingTool';
import dayjs from 'dayjs';
import * as api from '../api';

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    if (this.state.comments.length === 0) return <p>Loading....</p>
    return (
      <ul>
        {this.state.comments.map(comment => {
          const { _id, body, created_at, votes, created_by } = comment
          return <div key={_id}>
            <li >{body}</li>
            <p>{dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}</p>
            <p><img src={created_by.avatar_url} alt="user avatar"></img>{created_by.username}</p>
            <VotingTool votes={votes} id={_id} itemType="comment" />
          </div>
        })}
      </ul>
    )
  }

  componentDidMount() {
    this.getComments()
  }

  getComments = () => {
    api.getComments(this.props.articleId)
      .then(comments => {
        this.setState({
          comments
        })
      })
  }
}

Comments.propTypes = {
  articleId: PropTypes.string.isRequired
}

export default Comments