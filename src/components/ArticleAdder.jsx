import React, { Component } from 'react';
import './ArticleAdder.css';
import PropTypes from 'prop-types';

class ArticleAdder extends Component {
  state = {
    belongs_to: "",
    title: "",
    body: "",
    articleToAdd: false,
  }

  render() {
    const topics = ['coding', 'cooking', 'football']

    return (
      <div>
        {!this.state.articleToAdd ?
          <button onClick={this.clickToAddArticle} className="addArticleButton">Post new Article</button>
          :
          <form onSubmit={this.handleSubmit} className="addArticle">
            <select onChange={this.handleChange} value={this.state.belongs_to} name="belongs_to" className="selectTool">
              <option>Please Choose a Topic</option>
              {topics.map(topic => {
                return <option key={topic}>{topic}</option>
              })}
            </select> <br></br>

            <input className="addArticleTitle" placeholder="Please add a title" type="text" name="title" value={this.state.title} onChange={this.handleChange} required></input><br></br>
            <textarea className="addArticleBody" placeholder="Add article here" rows="5" type="text" name="body" value={this.state.body} onChange={this.handleChange} required ></textarea><br></br>
            <button className="addArticleButton">Submit</button>
          </form>
        }
      </div>

    )
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { belongs_to, title, body } = this.state
    const { user } = this.props
    const article = { belongs_to: belongs_to, title: title, body: body, created_by: { _id: user._id, username: user.username, avatar_url: user.avatar_url }, votes: 0, comment_count: 0 }

    this.props.addArticle(belongs_to, article)

    this.setState({
      articleToAdd: false
    })
  }

  clickToAddArticle = () => {
    this.setState({
      articleToAdd: true
    })
  }
}

ArticleAdder.propTypes = {
  user: PropTypes.object.isRequired,
  addArticle: PropTypes.func.isRequired
}

export default ArticleAdder
