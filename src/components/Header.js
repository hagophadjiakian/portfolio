import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/aboutme">About Me</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/skills">Skills</Link> |{" "}
        <Link to="/documentation">Documentation</Link>

      </nav>
    </header>
  );
}

export default Header;
