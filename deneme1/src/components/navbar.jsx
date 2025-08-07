import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <h2>CLOSETMATE</h2>
        </div>
        <div className="nav-right">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/">Dolabım</Link>
        <Link to="/">Favorilerim</Link>
        <Link to="/">Profilim</Link>
        <Link to="/SignUpForm" className="user-icon">👤</Link>
        </div>
    </nav>
  );
};

export default Navbar;
