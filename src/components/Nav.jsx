import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav>
      <Link to="/articles">Home</Link>
      <Link to="/articles">Coding</Link>
      <Link to="/articles">Cooking</Link>
      <Link to="/articles">Football</Link>
    </nav>
  )
}

export default Nav