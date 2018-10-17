import React, { Component } from 'react';
import './ArticleDisplay.css';
import VotingTool from './VotingTool';
import Comments from './Comments';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as api from '../api';

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    const { _id, title, body, created_at, created_by, comment_count, votes } = this.state.article
    if (!this.state.article.title) return <p>Loading....</p>
    return (
      !this.props.loggedIn ? <p>You must be logged in to view articles</p>
        :
        <main>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}</p>
          <div className="userVotesComments">
            <p>{created_by.username}</p> <img src={created_by.avatar_url} alt="user avatar"></img>
            <VotingTool id={_id} itemType="article" votes={votes} />
            <p>Comments: {comment_count}</p>
            <Comments articleId={_id} user={this.props.user} commentCount={comment_count} />
          </div>
        </main >
    )
  }

  componentDidMount() {
    this.getArticle()
  }

  getArticle = () => {
    api.getArticleById(this.props.articleId)
      .then(article => {
        this.setState({
          article
        })
      })
  }

}

ArticleDisplay.propTypes = {
  user: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
}


export default ArticleDisplay
