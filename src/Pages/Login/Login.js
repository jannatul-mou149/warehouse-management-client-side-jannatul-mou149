import React, { useRef } from 'react';
import './Login.css';
import car1 from '../../images/car1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMsg;
    const [
        signInWithEmailAndPassword,
        user,
        error,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://stark-scrubland-34079.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorMsg = <p className='text-danger'>Error: {error.message}</p>
    }

    const navigateToRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset Email has been sent');
        }
        else {
            toast('Please Enter Your Email Address');
        }
    }
    return (
        <div className="login-container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleSubmit} className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" ref={emailRef} placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" ref={passwordRef} placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className='text-white'>Forget Password? <button style={{ "color": "#7845F9" }} onClick={resetPassword}>Reset Password</button> </p>
                        <p className="social-text">Or,</p>
                        <SocialLogin></SocialLogin>
                    </form>
                    {errorMsg}
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here to Automoto?</h3>
                        <p>
                            Sign up to explore the amazing feautures of our warehouse management
                        </p>
                        <Link to='/register'>
                            <button onClick={navigateToRegister} className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    <img src={car1} className="image" alt="" />
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;