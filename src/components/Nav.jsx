import React from 'react';
import { Link } from '@reach/router';
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="link">Home</Link>
      {" | "}
      <Link to="/topics/coding/articles" className="link">Coding</Link>
      {" | "}
      <Link to="/topics/cooking/articles" className="link">Cooking</Link>
      {" | "}
      <Link to="/topics/football/articles" className="link">Football</Link>
    </nav>
  )
}

export default Nav