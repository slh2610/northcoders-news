import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ArticleDisplay.css'
import * as api from '../api';

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    const { title, body, created_at, created_by, votes, comment_count } = this.state.article
    if (!this.state.article.title) return <p>Loading....</p>
    return (
      <main>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{created_at}</p>
        <div className="userVotesComments">
          <p>{created_by.username}</p> <img src={created_by.avatar_url} alt="user avatar"></img>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
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
  articleId: PropTypes.string
}

export default ArticleDisplay
