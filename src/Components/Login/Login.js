import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" placeholder="minimum 6 characters" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Be a member of our family by <Link to="/register"> Create Account</Link></p>
            </div>
            <div><h2>----------OR---------</h2></div>
            <button className="btn"
                onClick={signInUsingGoogle}
            >Google Sign In</button>
        </div>
    );
};

export default Login;