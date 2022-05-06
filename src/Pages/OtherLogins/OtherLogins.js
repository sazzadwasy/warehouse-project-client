import React from 'react';
import './OtherLogins.css'

const OtherLogins = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
                <p className='mt-2 px-2 fw-bold text-secondary'>or</p>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
            </div>
            <div className='text-center'>
                <button className='btn btn-primary w-50 mb-2'>Google Sign-In</button>
                <br />
                <button className='btn btn-secondary w-50'>GitHub Sign-In</button>
            </div>
        </div>
    );
};

export default OtherLogins;