const { expect } = require('chai');
const chartData = require('./chartData');
const articles = [
  { _id: '1', votes: 4, title: 'Running a Node App', created_by: {}, body: '' },
  { _id: '2', votes: 8, title: 'Baking cakes', created_by: {}, body: '' },
  { _id: '3', votes: 0, title: 'Riding a bike', created_by: {}, body: '' },
  {
    _id: '4',
    votes: 2,
    title: 'Functional vs Object Orientated programming',
    created_by: {},
    body: ''
  },
  { _id: '5', votes: 1, title: 'What is git?', created_by: {}, body: '' },
  {
    _id: '6',
    votes: 6,
    title: 'Is React the future?',
    created_by: {},
    body: ''
  }
];

describe('Chart Data', () => {
  describe('Get Votes', () => {
    it('should return titles for the top 5 articles with the highest votes', () => {
      const result = chartData.getTitles(articles);
      expect(result[0]).to.equal('Baking cakes');
      expect(result[1]).to.equal('Is React the future?');
      expect(result[2]).to.equal('Running a Node App');
      expect(result[3]).to.equal('Functional vs Object Orientated programming');
      expect(result[4]).to.equal('What is git?');
    });
  });

  describe('Get Votes', () => {
    it('should return the numbers of votes for the top 5 articles', () => {
      const result = chartData.getVotes(articles);

      expect(result[0]).to.equal(8);
      expect(result[1]).to.equal(6);
      expect(result[2]).to.equal(4);
      expect(result[3]).to.equal(2);
      expect(result[4]).to.equal(1);
    });
  });
});
