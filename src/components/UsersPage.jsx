import React from 'react'

const UsersPage = ({ user }) => {

  if (!user) return <p>Loading....</p>

  return (
    <div>
      <h2>{user.username}</h2>
      <p>ID: {user._id}</p>
      <p>Name: {user.name}</p>
      <p>Avatar: <img src={user.avatar_url} alt="user avatar"></img></p>
    </div>
  )
}

export default UsersPage
