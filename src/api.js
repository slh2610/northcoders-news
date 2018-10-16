import axios from 'axios';
const API_URL = 'https://sallysnc-news.herokuapp.com/api'

export const getArticles = () => {
  return axios.get(`${API_URL}/articles`)
    .then(({ data }) => (data.articles))
}

export const getArticlesByTopic = (topic) => {
  return axios.get(`${API_URL}/topics/${topic}/articles`)
    .then(({ data }) => (data.articles))
}

export const getArticleById = (id) => {
  return axios.get(`${API_URL}/articles/${id}`)
    .then(({ data }) => (data.article))
}

export const getUserByUsername = (username) => {
  return axios.get(`${API_URL}/users/${username}`)
    .then(({ data }) => (data))
}

export const changeVotes = (id, direction, itemType) => {
  if (itemType === "article") {
    return axios.patch(`${API_URL}/articles/${id}?vote=${direction}`)
  } else {
    return axios.patch(`${API_URL}/comments/${id}?vote=${direction}`)
  }
}

export const getComments = (id) => {
  return axios.get(`${API_URL}/articles/${id}/comments`)
    .then(({ data }) => (data.comment))
}

