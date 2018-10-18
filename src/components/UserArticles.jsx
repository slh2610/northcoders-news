import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Articles.css'

const UserArticles = ({ articles, setSelectedUser }) => {

  const users = articles.map(user => {
    if (user.created_by !== null) {
      return user.created_by.username
    }
  })

  const userData = users.filter(name => name !== undefined).reduce((acc, user) => {
    acc[user] = ++acc[user] || 1
    return acc
  }, {})

  const data = {
    labels: Object.keys(userData),
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(userData)
      }
    ]
  };

  return (
    <div class="bar">
      <h2>User Rankings</h2>
      <Bar
        data={data}
        // width={20}
        // height={100}
        options={{
          maintainAspectRatio: false,
          onClick: setSelectedUser
        }}
      />
    </div>
  );
}

export default UserArticles