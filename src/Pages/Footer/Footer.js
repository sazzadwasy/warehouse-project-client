import React from 'react';
import './Footer.css'
import logo from '../../../src/images/logo2.png'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer>
            <div className='footer-info'>
                <div>
                    <p>Location : Jamal Khan mor,Chittagong</p>
                    <p>Mobile : 01703890605</p>
                    <p>All Right Reserved &copy;{year}</p>
                </div>
                <div className='footer-img'>
                    <img src={logo} alt='' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;