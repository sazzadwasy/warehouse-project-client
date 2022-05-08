import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import OtherLogins from '../../OtherLogins/OtherLogins';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error.message}</p>
    }
    if (loading) {
        return <p className='text-center fs-2'>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true });

    }
    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1 className='login-title mb-4'>Log-In</h1>
                <form onSubmit={handleLogin}>
                    <input type='email' name='email' placeholder='Email' required />
                    <br />
                    <input type='password' name='password' placeholder='Password' required />
                    <br />
                    <input className='btn btn-secondary' type='submit' value='Login' />
                    <br />
                    <br />
                    {errorElement}
                    <br />
                    <p>Want a dealership ? <Link className='text-decoration-none' to='/signup'>Please Signup</Link></p>
                </form>
                <OtherLogins></OtherLogins>
            </div>
        </div>
    );
};

export default Login;