import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/topics/coding/articles">Coding</Link>
      {" | "}
      <Link to="/topics/cooking/articles">Cooking</Link>
      {" | "}
      <Link to="/topics/football/articles">Football</Link>
    </nav>
  )
}

export default Nav