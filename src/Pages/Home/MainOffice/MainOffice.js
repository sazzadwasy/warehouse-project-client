import React from 'react';
import office1 from '../../../images/office1.jpg'
import './MainOffice.css'

const MainOffice = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-secondary mb-4'>Main Office</h1>
            <div className='mainOffice-container'>
                <div className='mainOffice-banner'>
                    <img src={office1} alt='' />
                </div>
                <div className='mainOffice-info ps-2'>
                    <h3>Visit Our Main office to know more about us.</h3>
                    <p>The only Manufacturer and country distributor of SUZUKI Motor Corporation Japan for their world-renowned SUZUKI Motorcycles. RMBL is one of the most prominent ventures of the WASYS Group and a premier conglomerate of Bangladesh. The journey of RMBL commenced in the summer of 2012 with a team of only three. The first shipment of bikes was due to arrive in the following summer and was sold out months before arrival. Since then, just like in other countries around the globe, owning a Suzuki motorcycle in Bangladesh has become a privilege.</p>
                </div>
            </div>
        </div>
    );
};

export default MainOffice;