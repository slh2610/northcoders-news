import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VotingTool from './VotingTool';
import CommentAdder from './CommentAdder';
import DeleteTool from './DeleteTool';
import dayjs from 'dayjs';
import * as api from '../api';

class Comments extends Component {
  state = {
    comments: []
  }

  render() {
    return (
      this.props.commentCount === 0 ?
        <div>
          <p>Be the first to add a comment</p>
          <CommentAdder user={this.props.user} articleId={this.props.articleId} addComments={this.addComments} />
        </div>
        :
        <div className="comments">
          <CommentAdder user={this.props.user} articleId={this.props.articleId} addComments={this.addComments} />
          <ul>
            {this.state.comments.map(comment => {
              const { _id, body, created_at, votes, created_by } = comment
              return <div key={_id}>
                <li >{body}</li>
                <p>{dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}</p>
                <p><img src={created_by.avatar_url} alt="user avatar"></img>{created_by.username}</p>
                <VotingTool votes={votes} id={_id} itemType="comment" />
                {comment.created_by._id === this.props.user._id && <DeleteTool id={comment._id} deleteComment={this.deleteComment} />}
              </div>
            })}
          </ul>
        </div>
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

  addComments = (id, comment) => {
    api.addComment(id, comment)
      .then(() => {
        this.setState({
          comments: [comment, ...this.state.comments]
        })
      })
  }

  deleteComment = (id) => {
    const deletedComments = this.state.comments.filter(comment => {
      return comment._id !== id
    })
    this.setState({
      comments: deletedComments
    })
    api.deleteComment(id)
  }

}


Comments.propTypes = {
  articleId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default Comments