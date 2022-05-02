import React from 'react';
import './AddItems.css';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `http://localhost:5000/car`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Item added to Inventory');
                }
            })
    }
    return (
        <div className='mx-auto m-5'>
            <h1 className='fw-bold text-center mb-5'>Add Items to Inventory</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 mb-2' placeholder='Car Name' type="text" {...register("name")} required />
                <input className='w-50 mb-2' value={user?.email} placeholder='Your Email' type="email" {...register("email")} required readOnly disabled />
                <input className='w-50 mb-2' placeholder='Price' type="text" {...register("price")} required />
                <input className='w-50 mb-2' placeholder='Quantity' type="number" {...register("quantity")} required />
                <input className='w-50 mb-2' placeholder='Supplier' type="text" {...register("supplier")} required />
                <input className='w-50 mb-2' placeholder='Photo URL' type="text" {...register("img")} required />
                <input className='w-50 mb-2' placeholder='Description' {...register("description")} required />
                <input type="submit" value="Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItems;