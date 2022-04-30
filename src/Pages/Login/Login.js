import React from 'react';
import './Login.css';
import car1 from '../../images/car1.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or,</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                <i className="fab fa-google"></i>
                                <span>Sign in with Google</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Link to='/register'>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    <img src={car1} className="image" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;