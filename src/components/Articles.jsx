import React, { Component } from 'react';
import { navigate, Link } from '@reach/router';
import Chart from './Chart';
import UserArticles from './UserArticles';
import Table from './Table';
import PropTypes from 'prop-types';
import * as api from '../api';
import './Articles.css';
import ArticleAdder from './ArticleAdder';
import LoadingSpinner from './LoadingSpinner';

class Articles extends Component {
  state = {
    articles: [],
    selectedUser: '',
    err: null
  };

  render() {
    if (this.state.articles.length === 0) return <LoadingSpinner />;
    return (
      <main className="allArticles">
        <Chart articles={this.state.articles} className="chart" />
        {!this.state.selectedUser && (
          <UserArticles
            articles={this.state.articles}
            setSelectedUser={this.setSelectedUser}
            className="barChart"
          />
        )}
        {this.state.selectedUser && (
          <Table
            articles={this.state.articles}
            selectedUser={this.state.selectedUser}
            backToChart={this.backToChart}
          />
        )}

        <div className="display">
          {this.props.loggedIn && (
            <ArticleAdder addArticle={this.addArticle} user={this.props.user} />
          )}
          {this.state.articles.map(article => {
            return (
              <div key={article._id} className="article">
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/articles/${article._id}`}
                >
                  <h2 className="articleTitle">{article.title}</h2>
                </Link>
                <p className="articleBody">{article.body}</p>

                <div className="otherArticleInfo">
                  <img src={article.created_by.avatar_url} alt="user avatar" />
                  <p className="articlesUsername">
                    {article.created_by.username}
                  </p>
                  <p className="articlesComments">
                    Comments: {article.comment_count}
                  </p>
                  <p className="articlesVotes">Votes: {article.votes}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  componentDidMount() {
    this.getArticlesByTopic();
  }

  fetchArticles = () => {
    api
      .getArticles()
      .then(articles => {
        this.setState({
          articles
        });
      })
      .catch(err => {
        navigate('/error', {
          replace: true,
          state: {
            code: err.code,
            message: err.message
          }
        });
      });
  };

  getArticlesByTopic = () => {
    if (this.props.topic) {
      api
        .getArticlesByTopic(this.props.topic)
        .then(articles => {
          this.setState({
            articles
          });
        })
        .catch(err => {
          navigate('/error', {
            replace: true,
            state: {
              code: err.code,
              message: err.message
            }
          });
        });
    } else {
      this.fetchArticles();
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.getArticlesByTopic();
    }
  }

  addArticle = (topic, article) => {
    api.postArticle(topic, article).then(() => {
      this.setState({
        articles: [article, ...this.state.articles]
      });
    });
  };

  setSelectedUser = (_, clickedItem) => {
    if (clickedItem.length !== 0) {
      const selectedUser = clickedItem[0]._model.label;
      this.setState({
        selectedUser: selectedUser
      });
    }
  };

  backToChart = () => {
    this.setState({
      selectedUser: ''
    });
  };
}

Articles.propTypes = {
  user: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default Articles;
