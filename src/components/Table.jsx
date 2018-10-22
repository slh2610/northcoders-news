import React from 'react';
import './Table.css'

const Table = ({ articles, selectedUser, backToChart }) => {

  const filteredArticles = articles.filter(article => {
    return article !== undefined && article.created_by !== null ?
      article.created_by.username === selectedUser :
      "No articles written"
  })

  const userInfo = filteredArticles.map(user => {
    return user.created_by.avatar_url
  })

  return (
    <div>
      <div className="userHeading">
        <h2>
          <img src={userInfo[1]} alt="user avatar"></img>
          {selectedUser}
        </h2>
      </div>
      <table>
        <thead>
          <tr>
            <th className="tableHeading">Topic</th>
            <th className="tableHeading">Article</th>
            <th className="tableHeading">Commments</th>
            <th className="tableHeading">Votes</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map(article => {
            return <tr>
              <td className="tableBody">{article.belongs_to}</td>
              <td className="tableBody">{article.title}</td>
              <td className="tableBody">{article.comment_count}</td>
              <td className="tableBody">{article.votes}</td>
            </tr>
          })
          }
        </tbody>

      </table>
      <button onClick={backToChart} className="tableButton">Back</button>
    </div>
  )
}

export default Table