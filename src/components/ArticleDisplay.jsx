import React, { Component } from 'react';
import '../assets/ArticleDisplay.css';
import VotingTool from './VotingTool';
import { navigate } from '@reach/router';
import Comments from './Comments';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import * as api from '../api';

class ArticleDisplay extends Component {
  state = {
    article: {}
  };

  render() {
    const {
      _id,
      title,
      body,
      created_at,
      created_by,
      comment_count,
      votes
    } = this.state.article;
    if (!this.state.article.title) return <LoadingSpinner />;
    return !this.props.loggedIn ? (
      <p>You must be logged in to view articles</p>
    ) : (
      <main className="articleDisplay">
        <div className="singleArticle">
          <h2 className="title">{title}</h2>
          <p className="body">{body}</p>
          <p className="date">
            {dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}
          </p>
        </div>

        <div className="user">
          <img
            src={created_by.avatar_url}
            alt="user avatar"
            className="articleImg"
          />
          <p>{created_by.username}</p>
        </div>

        <VotingTool id={_id} itemType="article" votes={votes} />
        <p>Comments: {comment_count}</p>

        <Comments
          articleId={_id}
          user={this.props.user}
          commentCount={comment_count}
          className="comments"
        />
      </main>
    );
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    api
      .getArticleById(this.props.articleId)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(err => {
        navigate('/error', {
          replace: true,
          state: {
            code: err.code,
            message: err.message,
            from: '/articles'
          }
        });
      });
  };
}

ArticleDisplay.propTypes = {
  user: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default ArticleDisplay;
