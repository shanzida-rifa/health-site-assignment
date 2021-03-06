import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img1 from './sanjeevani.jpg';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "green",
        textDecoration: "none"

    }
    return (
        <nav className="head-style ">

            <h1>Sanjeevani-Health Home Care</h1>
            <br />
            <br />


            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/home">Home</NavLink>
            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/Services">Services</NavLink>
            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/about">About Us</NavLink>

            <NavLink className="nav"
                activeStyle={activeStyle}
                to="/review">Review</NavLink>
            <NavLink className="nav" activeStyle={activeStyle} to="/login">Login</NavLink>
            <span style={{ color: 'white' }}>{user.displayName}</span>
            {
                user.email ?
                    <button onClick={logOut}>log out</button>
                    :
                    <NavLink to="/logout">Log out</NavLink>}

        </nav>
    );
};

export default Header;