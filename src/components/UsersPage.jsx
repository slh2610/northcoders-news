import React from 'react';
import './UsersPage.css';

const UsersPage = ({ user }) => {
  if (!user) return <p>Loading....</p>;

  return (
    <div className="userPage">
      <h2 className="userPageTite">{user.username}</h2>
      <p className="userPageId">ID: {user._id}</p>
      <p className="userPageName">{user.name}</p>
      <p>
        <img src={user.avatar_url} alt="user avatar" />
      </p>
    </div>
  );
};

export default UsersPage;
