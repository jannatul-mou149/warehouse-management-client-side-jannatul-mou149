import React from 'react';
import '../Login/Login.css';
import car2 from '../../images/car2.png';
import { Link } from 'react-router-dom';
const Registration = () => {
    return (
        <div className="login-container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign Up" className="btn solid" />
                        <p className="social-text">Or,</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                <i className="fab fa-google"></i>
                                <span>Sign up with Google</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Already have an Account ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Link to='/login'>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <img src={car2} className="image" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Registration;