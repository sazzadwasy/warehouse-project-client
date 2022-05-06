import React from 'react';
import { Link } from 'react-router-dom';
import OtherLogins from '../../OtherLogins/OtherLogins';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1 className='login-title mb-4'>Log-In</h1>
                <form>
                    <input type='email' name='email' placeholder='Email' required />
                    <br />
                    <input type='password' name='password' placeholder='Password' required />
                    <br />
                    <input className='btn btn-secondary' type='submit' value='Login' />
                    <br />
                    <br />
                    <p>Want a dealership ? <Link className='text-decoration-none' to='/signup'>Please Signup</Link></p>
                </form>
                <OtherLogins></OtherLogins>
            </div>
        </div>
    );
};

export default Login;