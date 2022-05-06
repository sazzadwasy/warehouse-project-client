import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './OtherLogins.css'

const OtherLogins = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement

    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error.message}</p>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
                <p className='mt-2 px-2 fw-bold text-secondary'>or</p>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 mb-2'>Google Sign-In</button>
                <br />
                <button className='btn btn-secondary w-50'>GitHub Sign-In</button>
            </div>
        </div>
    );
};

export default OtherLogins;