import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>
                    Register a Account
                </h2>
                <form onSubmit="">
                    <input type="email" placeholder="Enter your email" />
                    <br />
                    <input type="passeord" placeholder="Your password" />
                    <br />
                    <input type="passeord" placeholder="Re-enter your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account?
                    <Link to="/login"> Login </Link>
                </p>
                <div>----------or-----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;