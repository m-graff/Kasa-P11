import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import "./Header.css";

function Header() {
  
  return (
    <header>
      <Link to="/">
        <img id="header-logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header

