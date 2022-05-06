import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllInventory = ({ car }) => {
    const { name, _id, description, price, img, quantity, supplier } = car;
    const navigate = useNavigate();
    const navigateToInventoryDetails = id => {
        navigate(`/car/${id}`);
    }
    return (
        <div className='card'>
            <div className='card-body'>
                <img className='inventory-image' src={img} alt="" />
                <div className='p-4'>
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <p><small>{description}</small></p>
                    <p>Quantity: {quantity}</p>
                    <p className='mb-4'>Supplier: {supplier}</p>
                    <button className='btnn card-btn' onClick={() => navigateToInventoryDetails(_id)}>Stock Update</button>

                </div>
            </div>
        </div>
    );
};

export default AllInventory;