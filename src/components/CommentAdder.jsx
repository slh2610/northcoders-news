import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentAdder extends Component {
  state = {
    commentText: ""
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter comment here" onChange={this.handleChange} value={this.state.commentText}></input>
        <br></br>
        <button>Submit</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      commentText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, articleId } = this.props
    const comment = { body: this.state.commentText, created_by: { _id: user._id, username: user.username, avatar_url: user.avatar_url }, votes: 0 }
    this.props.addComments(articleId, comment)
  }
}

CommentAdder.propTypes = {
  articleId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default CommentAdder
