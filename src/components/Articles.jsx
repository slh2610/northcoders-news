import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';
import './Articles.css'

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <main>
        {this.state.articles.map(article => {
          return <div className="allArticles" key={article._id}> <Link to={`/articles/${article._id}`}><h2>{article.title}</h2></Link>
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
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles()
      .then(articles => {
        this.setState({
          articles
        });
      });
  };
}

export default Articles
