import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import batManLogo from '../images/batman-logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={batManLogo} alt="Logo de Bat-Man" />
            <span className="font-weight-light">Management</span>
            <span className="font-weight-bold">CVs</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
