import React from 'react';
import './Table.css';

const Table = ({ articles, selectedUser, backToChart }) => {
  const filteredArticles = articles.filter(article => {
    return article.created_by.username === selectedUser;
  });

  const userInfo = filteredArticles.map(user => {
    return user.created_by.avatar_url;
  });

  return (
    <div>
      <div className="userHeading">
        <h2>
          <img src={userInfo[1]} alt="user avatar" />
          {selectedUser}
        </h2>
      </div>
      <table>
        <thead key="rows">
          <tr>
            <th key="topic" className="tableHeading">
              Topic
            </th>
            <th key="article" className="tableHeading">
              Article
            </th>
            <th key="comments" className="tableHeading">
              Commments
            </th>
            <th key="votes" className="tableHeading">
              Votes
            </th>
          </tr>
        </thead>
        <tbody key="columns">
          {filteredArticles.map(article => {
            return (
              <tr>
                <td key="belongsTo" className="tableBody">
                  {article.belongs_to}
                </td>
                <td key="title" className="tableBody">
                  {article.title}
                </td>
                <td key="commentCout" className="tableBody">
                  {article.comment_count}
                </td>
                <td key="votes" className="tableBody">
                  {article.votes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={backToChart} className="tableButton">
        Back
      </button>
    </div>
  );
};

export default Table;
