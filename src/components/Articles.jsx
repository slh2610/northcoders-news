import React, { Component } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css'
import ArticleAdder from './ArticleAdder';

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <main>
        {this.props.loggedIn && <ArticleAdder addArticle={this.addArticle} user={this.props.user} />}
        {this.state.articles.map(article => {
          return <div className="allArticles" key={article._id}>
            <Link to={`/articles/${article._id}`}><h2>{article.title}</h2></Link>
            <p>{article.body}</p>
            <div className="userInfo">
              <img src={article.created_by.avatar_url} alt="user avatar"></img>
              <p>{article.created_by.username}</p>
            </div>
          </div>
        })}
      </main>
    )
  }

  componentDidMount() {
    this.getArticlesByTopic();
  }

  fetchArticles = () => {
    api.getArticles()
      .then(articles => {
        this.setState({
          articles
        });
      });
  };

  getArticlesByTopic = () => {
    if (this.props.topic) {
      api.getArticlesByTopic(this.props.topic)
        .then(articles => {
          this.setState({
            articles
          })
        })
    } else {
      this.fetchArticles()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.getArticlesByTopic()
    }
  }

  addArticle = (topic, article) => {
    api.postArticle(topic, article)
      .then(() => {
        this.setState({
          articles: [article, ...this.state.articles]
        })
      })
  }
}

Articles.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}

export default Articles
