import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green",
        textDecoration: "none"
    }
    return (
        <nav className="head-style me-auto d-flex">
            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/home">Home</NavLink>
            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/courses">Courses</NavLink>
            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/about">About Us</NavLink>

            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/review">Course Review</NavLink>

        </nav>
    );
};

export default Header;