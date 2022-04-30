import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { name, id, description, price, img, quantity, supplier } = inventory;
    return (
        <div className='inventory'>
            <img className='inventory-image' src={img} alt="" />
            <div className='p-4'>
                <h4>{name}</h4>
                <p>Price: {price} Tk</p>
                <p><small>{description}</small></p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <Link to={`/inventory/${id}`}>
                    <button className='btn btn-primary'>Manage</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;