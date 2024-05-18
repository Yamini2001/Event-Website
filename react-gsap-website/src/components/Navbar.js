import React, { useState} from 'react';
import './Navbar.css';
import logo from '../assets/images/logo1.png'; // Import the logo image

const Navbar = () => {
   

    return (
            <div className="navbar-brand">
                <img src={logo} alt="Astrix Logo" className="navbar-logo" />
                <h1 className="navbar-text">Astrix.</h1>
            </div>
    );
};

export default Navbar;
