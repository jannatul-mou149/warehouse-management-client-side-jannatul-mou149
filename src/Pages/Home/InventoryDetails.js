import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/car/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [id])
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate(`/car/inventory`);
    }

    const handleCarQuantity = () => {
        let { name, _id, description, price, img, quantity, supplier } = car;
        if (quantity > 0) {
            quantity = quantity - 1;
            const updateCar = { name, _id, description, price, img, quantity, supplier };

            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateCar)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCar(data)
                })
        }
        else {
            alert('stock out')
        }
    }

    const handleCarAddQuantity = (event) => {
        event.preventDefault()
        let { name, _id, description, price, img, quantity, supplier } = car;

        const newAddedQuantity = event.target.number.value;
        if (!newAddedQuantity) {
            alert('please Enter valid number');
        }
        else {
            quantity = parseInt(quantity) + parseInt(newAddedQuantity);

            const updateCar = { name, _id, description, price, img, quantity, supplier };
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateCar)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCar(data)
                    event.target.reset()
                })
        }
    }

    return (
        <div>
            <h1 className='text-center m-5'>Inventory details</h1>

            <div className="container py-5">
                <div className="inner-content">
                    <h1 className='text-center text-primary mb-4'>{car.name}</h1>
                    <img className='img-fluid' src={car.img} alt="" />

                    <div className='text-center mt-5'>
                        <p>Price: {car.price} Tk</p>
                        <p>Supplier: {car.supplier}</p>
                        <p>Quantity : {car.quantity}</p>
                        <button className='btn' onClick={handleCarQuantity}>Delivered</button>
                    </div>
                </div>
                <form onSubmit={handleCarAddQuantity}>
                    <input type="number" name="number" placeholder='Insert Quantity' />
                    <br />
                    <input type="submit" value="Update Stock" />
                </form>
                <button onClick={navigateToInventory} className='btn'>Manage Inventory</button>
            </div>
        </div>
    );
};

export default InventoryDetails;