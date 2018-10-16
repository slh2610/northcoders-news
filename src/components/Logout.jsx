import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button>Logout</button>
    </form>
  )
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Logout
