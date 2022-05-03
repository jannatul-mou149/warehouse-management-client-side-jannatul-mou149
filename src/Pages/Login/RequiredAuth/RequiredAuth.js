import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const RequiredAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <div className='inner-content text-center'>
                <h3 className='text-warning mt-5 mb-2' > Your Email is not verified!!</h3>
                <h5 className=' text-warning mb-5'>Varification Email has been Sent, Please Verify your Email!!</h5>
                <button
                    className='btn mb-5'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Varification Email Sent');
                    }}
                >
                    Send Verification Email Again
                </button>
            </div >
            <ToastContainer></ToastContainer>
        </div >
    }
    return children;

};

export default RequiredAuth;