import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Articles.css'

class Articles extends Component {
  state = {
    articles: [{
      _id: "5bbe1752c1b1c934c71e7101",
      votes: 5,
      title: "Running a Node App",
      created_by: {
        _id: "5bbe1752c1b1c934c71e70fd",
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
      },
      body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
      created_at: "2016-08-18T12:07:52.389Z",
      belongs_to: "coding",
      comment_count: 8
    },
    {
      _id: "5bbe1752c1b1c934c71e7102",
      votes: 0,
      title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
      created_by: {
        _id: "5bbe1752c1b1c934c71e70fd",
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
      },
      body: "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
      created_at: "2017-07-20T20:57:53.256Z",
      belongs_to: "coding",
      comment_count: 6
    }]
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
}

export default Articles
