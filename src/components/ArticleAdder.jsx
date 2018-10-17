import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleAdder extends Component {
  state = {
    belongs_to: "",
    title: "",
    body: ""
  }

  render() {
    const topics = ['coding', 'cooking', 'football']

    return (
      <div>
        <form className="main" onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} value={this.state.belongs_to} name="belongs_to">
            <option>Please Choose a Topic</option>
            {topics.map(topic => {
              return <option key={topic}>{topic}</option>
            })}
          </select>
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
          <label>Body</label>
          <input type="text" name="body" value={this.state.body} onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
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
  }
}

ArticleAdder.propTypes = {
  user: PropTypes.object.isRequired,
  addArticle: PropTypes.func.isRequired
}

export default ArticleAdder
