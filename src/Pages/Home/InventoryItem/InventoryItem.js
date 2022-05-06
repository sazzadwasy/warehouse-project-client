import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({ item }) => {
    const { _id, name, description, img, price, quantity, supplier } = item
    const navigate = useNavigate()
    const handleNavigateToBike = id => {
        navigate(`/inventory/${id}`)

    }
    return (
        <div className='inventory-item'>
            <img className="w-75" src={img} alt='' />
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
            <p className="card-text fw-bold">Supplier : {supplier}</p>
            <p className="card-text fw-bold">Price : {price}</p>
            <p className="card-text fw-bold">Quantity : {quantity}</p>
            <button onClick={() => handleNavigateToBike(_id)} className='update-btn m-2'>Update</button>
        </div>
    );
};

export default InventoryItem;