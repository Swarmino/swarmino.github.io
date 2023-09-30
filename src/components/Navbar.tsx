import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav style={Styles.nav}>
      <ul style={Styles.ul}>
        <li style={Styles.li}>
          <Link style={Styles.a} to="/">About</Link>
        </li>
        <li style={Styles.li}>
          <Link style={Styles.a} to="/projects">Projects</Link>
        </li>
        <li style={Styles.li}>
          <Link style={Styles.a} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  ul: {
    display: 'flex',
    listStyle: 'none'
  },
  li: {
    marginLeft: '2rem'
  },
  a: {
    color: '#fff',
    textDecoration: 'none'
  },
  img: {
    width: '50px',
    marginLeft: '2rem'
  }
};

export default NavBar;