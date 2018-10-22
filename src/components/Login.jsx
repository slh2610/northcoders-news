import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logout from './Logout';
import './Login.css'

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  render() {
    const { username, avatar_url } = this.props.user
    return (
      !this.props.loggedIn ?
        <form onSubmit={this.handleSubmit} className="loginComponent">

          <label>Username: </label>
          <input className="loginInput" type="text" value={this.state.username} name="username" onChange={this.handleChange} required></input>
          <br></br>

          <label>Password: </label>
          <input className="loginInput" type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
          <br></br>

          <button className="loginButton">Login</button>
        </form >
        : this.props.err ? <div className="loginComponent">
          <p>Invalid username</p>
          <button className="loginButton" onClick={this.props.backToLogin}>Try again</button>
        </div>
          :

          <div className="loginComponent">
            <p>Logged in as: <br></br><img src={avatar_url} alt="user avatar" className="login-img"></img>  {username}</p>
            <Logout logout={this.props.logout} />
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
    })
  }
}

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  backToLogin: PropTypes.func.isRequired
}

export default Login
