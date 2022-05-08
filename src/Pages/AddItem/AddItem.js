import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/inventory'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Item added successfuly')
            })
    }
    return (
        <div className='addItem-container'>
            <h1 className='text-center text-secondary'>Add new item</h1>
            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2' type="text" placeholder="Your name" {...register("name")} />
                <input className='mb-2 p-2' type="email" placeholder="email" {...register("email")} />
                <input className='mb-2 p-2' type="text" placeholder="Description" {...register("description")} />
                <input className='mb-2 p-2' type="text" placeholder="Img url" {...register("img")} />
                <input className='mb-2 p-2' type="text" placeholder="Supplier" {...register("supplier")} />
                <input className='mb-2 p-2' type="number" placeholder="Quantity" {...register("quantity")} />
                <input className='mb-2 p-2' type="number" placeholder="Price" {...register("price")} />
                <input className='btn btn-secondary mb-4' type="submit" placeholder="" value='Add item' />
            </form>
        </div>
    );
};

export default AddItem;