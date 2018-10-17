import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = ({ articles }) => {

  const articleData = articles.reduce((acc, article) => {
    acc[article['title']] = article['votes']
    return acc;
  }, {})

  function sortObject(obj) {
    let arr = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({
          'key': prop,
          'value': obj[prop]
        });
      }
    }

    arr.sort(function (a, b) { return b.value - a.value; });
    return arr;
  }

  const titles = sortObject(articleData).map(obj => {
    return obj.key
  })

  const votes = sortObject(articleData).map(obj => {
    return obj.value
  })

  console.log(articles)

  const data = {
    labels: titles.slice(0, 5),

    datasets: [{
      data: votes.slice(0, 5),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#04B404',
        '#B45F04'
      ],
    }]
  };

  return (
    < div className="chart" >
      <h2>Most Popular Articles</h2>
      <Pie data={data} />
    </div >
  );
}

export default Chart
