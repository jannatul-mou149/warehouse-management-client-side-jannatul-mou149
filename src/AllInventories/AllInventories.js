import React from 'react';

const AllInventories = ({ car }) => {
    const { name, _id, description, price, img, quantity, supplier } = car;
    return (
        <div>
            <div className='inventory'>
                <img className='inventory-image' src={img} alt="" />
                <div className='p-4'>
                    <h4>{name}</h4>
                    <p>Price: {price} Tk</p>
                    <p><small>{description}</small></p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                </div>
            </div>
        </div>
    );
};

export default AllInventories;