import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventoryes from '../../hooks/useInventoryes';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventoryes, setInventoryes] = useInventoryes()
    const navigate = useNavigate()
    const handleNavigateToBike = id => {
        navigate(`/inventory/${id}`)

    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you want ot delete this inventory?')
        if (proceed) {
            const url = `https://frozen-tor-80149.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const rest = inventoryes.filter(inventory => inventory._id !== id)
                    setInventoryes(rest)
                })
        }
    }
    return (
        <div>
            <h1 className='text-center'>All Inventory Items</h1>
            <div className='all-inventoryes container'>
                {
                    inventoryes.map(inventory =>
                        <div className='inventory' key={inventory._id}>
                            <img className="w-75" src={inventory.img} alt='' />
                            <h3 className="card-title text-center">{inventory.name}</h3>
                            <p className="card-text">{inventory.description}</p>
                            <p className="card-text fw-bold">Supplier : {inventory.supplier}</p>
                            <p className="card-text fw-bold">Price : {inventory.price}</p>
                            <p className="card-text fw-bold">Quantity : {inventory.quantity}</p>
                            <button onClick={() => handleDelete(inventory._id)} className='detail-buttons'>Delete</button>
                            <button onClick={() => handleNavigateToBike(inventory._id)} className='detail-buttons mx-2'>Update</button>
                        </div>

                    )
                }
            </div>
            <div className='text-center mb-4'>
                <Link to='/additems'><button className=' detail-buttons'>Add new item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;