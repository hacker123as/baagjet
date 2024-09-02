import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1><Link to="/">Baagjet</Link></h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/admin">Admin</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
