import React from 'react';
import Banner from '../Banner/Banner';
import Dealers from '../Dealers/Dealers';
import InventoryItems from '../InventoryItems/InventoryItems';
import MainOffice from '../MainOffice/MainOffice';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <br />
            <MainOffice></MainOffice>
            <br />
            <br />
            <Dealers></Dealers>
            <br />
            <br />
        </div>
    );
};

export default Home;