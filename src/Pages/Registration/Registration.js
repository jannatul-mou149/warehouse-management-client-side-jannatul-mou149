import React from 'react';
import '../Login/Login.css';
import car2 from '../../images/car2.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }


    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (
        <div className="login-container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleRegister} className="sign-in-form">
                        <h2 className="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign Up" className="btn solid" />
                        <p className="social-text">Or,</p>
                        <SocialLogin></SocialLogin>
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
                            <button className="btn transparent" id="sign-up-btn" onClick={navigateLogin}>
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