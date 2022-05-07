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
    const handleDeliver = () => {
        const url = `http://localhost:5000/inventory/update/${id}`
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: inventoryItem.quantity - 1 })
        })
            .then(res => res.json())
            .then(data => {
                setInventoryItem({ ...inventoryItem, quantity: inventoryItem.quantity - 1 })
            })
    }
    const handleRestock = (event) => {
        event.preventDefault()
        const newQuantity = parseInt(event.target.quantity.value)
        const url = `http://localhost:5000/inventory/update/${id}`
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: inventoryItem.quantity + newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                setInventoryItem({ ...inventoryItem, quantity: inventoryItem.quantity + newQuantity })
            })
    }
    return (
        <div className='p-4'>
            <div className='detail-container'>
                <div className='img-container'>
                    <img className='img-fluid' src={img} alt='' />
                </div>
                <div className='p-4'>
                    <div className='bike-detail'>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>Supplier : {supplier}</p>
                        <p>Quantity : {quantity}</p>
                        <p>Price : {price}</p>
                        <button onClick={handleDeliver} className='detail-buttons mt-2'>Deliver</button>
                    </div>
                    <br />
                    <div>
                        <form onSubmit={handleRestock}>
                            <input type='number' name='quantity' placeholder='Write quantity' required />
                            <button type='submit' className='detail-buttons'>Add stock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailInventory;