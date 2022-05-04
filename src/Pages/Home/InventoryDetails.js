import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryDetails.css';

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
            <h1 className='fw-bold text-center m-5'>Inventory details</h1>
            <div className="best-sell">
                <div className="car-info">
                    <div className="car">
                        <div className="car-detail">
                            <div className="img">
                                <img src={car.img} alt="" />
                            </div>
                            <div className="other-info">
                                <div className="name-model">
                                    <div className="name">{car.name}</div>
                                    <div className="model">sold : {car.sold}</div>
                                </div>
                                <div className="specs">
                                    <div className="price">
                                        <span>Pirce :</span> {car.price}
                                    </div>
                                    <div className="sold">
                                        <span>Supplier: :</span> {car.supplier}
                                    </div>
                                    <div className="engine">
                                        <span>Quantity :</span> {car.quantity}
                                    </div>
                                    <div className="engine">
                                        <button className='deliver-btn' onClick={handleCarQuantity}>Delivered</button>
                                    </div>
                                    <div className="engine">
                                        <form onSubmit={handleCarAddQuantity}>
                                            <input type="number" name="number" placeholder='Insert Quantity' />
                                            <br />
                                            <input type="submit" value="Update Stock" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className='text-center mb-5'>
                <button onClick={navigateToInventory} className='btn'>Manage Inventory</button>
            </div>
        </div>
    );
};

export default InventoryDetails;