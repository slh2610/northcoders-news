import React, { Component } from 'react';

class ArticleDisplay extends Component {
  state = {
    article: {
      _id: "5bbe1752c1b1c934c71e7104",
      votes: 0,
      title: "Making sense of Redux",
      created_by: {
        _id: "5bbe1752c1b1c934c71e70fd",
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
      },
      body: "When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).",
      created_at: "2017-12-24T05:38:51.240Z",
      belongs_to: "coding",
      __v: 0,
      comment_count: 9
    }
  }

  render() {
    const { title, body, created_at, created_by, votes, comment_count } = this.state.article
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

}

export default ArticleDisplay
