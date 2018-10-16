import React, { Component } from 'react';
import './ArticleDisplay.css';
import VotingTool from './VotingTool';
import Comments from './Comments';
import dayjs from 'dayjs';
import * as api from '../api';

class ArticleDisplay extends Component {
  state = {
    article: {}
  }

  render() {
    const { title, body, created_at, created_by, comment_count } = this.state.article
    if (!this.state.article.title) return <p>Loading....</p>
    return (
      <main>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{dayjs(created_at).format('MMMM D YYYY, h:mm:ss a')}</p>
        <div className="userVotesComments">
          <p>{created_by.username}</p> <img src={created_by.avatar_url} alt="user avatar"></img>
          <VotingTool id={this.state.article._id} itemType="article" votes={this.state.article.votes} />
          <Comments articleId={this.state.article._id} user={this.props.user} />
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


export default ArticleDisplay
