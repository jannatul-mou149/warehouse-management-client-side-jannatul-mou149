import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ car }) => {
    const { name, _id, description, price, img, quantity, supplier } = car;
    const navigate = useNavigate();
    const navigateToInventoryDetails = id => {
        navigate(`/car/${id}`);
    }
    return (
        <div className='inventory'>
            <img className='inventory-image' src={img} alt="" />
            <div className='p-4'>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>

                <button className='btn' onClick={() => navigateToInventoryDetails(_id)}>Manage</button>

            </div>
        </div>
    );
};

export default Inventory;