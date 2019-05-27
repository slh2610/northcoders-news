import React from 'react';
import '../assets/Logout.css';
import PropTypes from 'prop-types';

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button className="logoutButton">Logout</button>
    </form>
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Logout;
