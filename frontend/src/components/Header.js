import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/playground">Playground</Link></li>
          <li><Link to="/academic-wall">Academic Wall</Link></li>
          <li><Link to="/contributors">Contributors</Link></li>
          <li><Link to="/login">Login</Link> / <Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
