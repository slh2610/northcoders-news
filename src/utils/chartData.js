export const getTitles = articles => {
  const titles = getArticleData(articles);
  return sortObject(titles).map(obj => {
    return obj.key;
  });
};

export const getVotes = articles => {
  const votes = getArticleData(articles);
  return sortObject(votes).map(obj => {
    return obj.value;
  });
};

const getArticleData = articles => {
  return articles.reduce((acc, article) => {
    acc[article['title']] = article['votes'];
    return acc;
  }, {});
};

const sortObject = obj => {
  let arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push({
        key: prop,
        value: obj[prop]
      });
    }
  }

  arr.sort(function(a, b) {
    return b.value - a.value;
  });
  return arr;
};
