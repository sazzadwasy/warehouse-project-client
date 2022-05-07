import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>
            <p className='text-center fs-2 fw-bold'>Inventory items</p>
            <div className="items-container container">
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </div>
            <div className='text-center mb-4'>
                <Link to='/manageinventory'><button className=' detail-buttons'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default InventoryItems;