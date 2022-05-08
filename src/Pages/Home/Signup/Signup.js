import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OtherLogins from '../../OtherLogins/OtherLogins';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error.message}</p>
    }
    if (loading) {
        return <p className='text-center fs-2'>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleSignup = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
        event.target.reset()

    }
    return (
        <div>
            <div className='login-container'>
                <div className='login-form'>
                    <h1 className='login-title mb-4'>Sign Up</h1>
                    <form onSubmit={handleSignup}>
                        <input type='text' name='name' placeholder='Name' />
                        <br />
                        <input type='email' name='email' placeholder='Email' required />
                        <br />
                        <input type='password' name='password' placeholder='Password' required />
                        <br />
                        <input className='btn btn-secondary' type='submit' value='Signup' />
                        <br />
                        <br />
                        {errorElement}
                        <br />
                        <p>Already have dealership ? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
                    </form>
                    <OtherLogins></OtherLogins>
                </div>
            </div>
        </div>
    );
};

export default Signup;