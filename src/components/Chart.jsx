import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as chartData from '../utils/chartData';
import '../assets/Chart.css';

const Chart = ({ articles }) => {
  const titles = chartData.getTitles(articles);

  const votes = chartData.getVotes(articles);

  const data = {
    labels: titles.slice(0, 5),

    datasets: [
      {
        data: votes.slice(0, 5),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#04B404',
          '#B45F04'
        ],
        width: 500,
        height: 100
      }
    ]
  };

  return (
    <div className="chart">
      <h2>Popular Articles</h2>
      <Pie data={data} />
    </div>
  );
};

export default Chart;
