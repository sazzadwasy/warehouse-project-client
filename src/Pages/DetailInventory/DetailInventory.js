import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailInventory.css'

const DetailInventory = () => {
    const { id } = useParams()
    console.log(id)
    const [inventoryItem, setInventoryItem] = useState({})
    const { _id, name, description, img, price, quantity, supplier } = inventoryItem
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventoryItem(data)
            })
    }, [id])
    return (
        <div className='p-4'>
            <div className='detail-container'>
                <div className='img-container'>
                    <img src={img} alt='' />
                </div>
                <div>
                    <div className='bike-detail'>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>Supplier : {supplier}</p>
                        <p>Quantity : {quantity}</p>
                        <p>Price : {price}$</p>
                        <button className='detail-buttons mt-2'>Delever</button>
                    </div>
                    <div className='addStock-section mt-4'>
                        <div className='mx-auto'>
                            <input type='text' name='quantity' placeholder='Write quantity' />
                            <button className='detail-buttons'>Add stock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailInventory;