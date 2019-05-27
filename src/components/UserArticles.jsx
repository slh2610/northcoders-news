import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../assets/Articles.css';

const UserArticles = ({ articles, setSelectedUser }) => {
  const users = articles.map(user => {
    return user.created_by.username;
  });

  const userData = users
    .filter(name => name !== undefined)
    .reduce((acc, user) => {
      acc[user] = ++acc[user] || 1;
      return acc;
    }, {});

  const data = {
    labels: Object.keys(userData),
    datasets: [
      {
        label: 'Number of articles written: ',
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#04B404',
          '#B45F04'
        ],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(userData)
      }
    ]
  };

  return (
    <div className="bar">
      <h2>Articles By User</h2>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          onClick: setSelectedUser
        }}
      />
    </div>
  );
};

export default UserArticles;
