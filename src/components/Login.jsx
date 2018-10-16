import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logout from './Logout';
import './Login.css'

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  }

  render() {
    const { username, avatar_url } = this.props.user
    return (
      !this.state.loggedIn ?
        <form onSubmit={this.handleSubmit} className="loginComponent">
          <label>Username: </label>
          <input type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
          <br></br>
          <label>Password: </label>
          <input type="text" value={this.state.password} name="password" onChange={this.handleChange}></input>
          <br></br>
          <button>Login</button>
        </form >
        : <div className="loginComponent">
          <p>Logged in as: <br></br><img src={avatar_url} alt="user avatar" className="login-img"></img>  {username}</p>
          <Logout logout={this.logout} />
        </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchUser(this.state.username)
    this.setState({
      username: "",
      password: "",
      loggedIn: true
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false
    })
  }

}


Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default Login
