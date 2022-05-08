import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    console.log(user)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        if (user) {
            const email = user?.email
            console.log(email)
            const url = `https://frozen-tor-80149.herokuapp.com/myitems?email=${email}`
            try {
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setMyItems(data)
                    })
            }
            catch (error) {
                console.log(error.messege)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
    }, [user])
    return (
        <div>
            <h1 className='text-center text-secondary' >My Items</h1>
            <div className='all-inventoryes container'>
                {
                    myItems.map(inventory =>
                        <div className='inventory' key={inventory._id}>
                            <img className="w-75" src={inventory.img} alt='' />
                            <h3 className="card-title text-center">{inventory.name}</h3>
                            <p className="card-text">{inventory.description}</p>
                            <p className="card-text fw-bold">Supplier : {inventory.supplier}</p>
                            <p className="card-text fw-bold">Price : {inventory.price}</p>
                            <p className="card-text fw-bold">Quantity : {inventory.quantity}</p>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyItems;