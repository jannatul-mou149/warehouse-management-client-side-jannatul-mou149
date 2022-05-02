import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMsg;
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorMsg = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {errorMsg}
            <button onClick={() => signInWithGoogle()}
                className="btnn">
                <i className="fab fa-google"></i>
                <span>Sign in with Google</span>
            </button>

        </div>
    );
};

export default SocialLogin;