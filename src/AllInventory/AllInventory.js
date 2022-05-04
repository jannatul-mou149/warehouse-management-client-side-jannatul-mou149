import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../AllInventory/AllInventory.css';
const AllInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/car/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = cars.filter(car => car._id !== id);
                    setCars(remaining);
                })
        }
    }
    return (
        <div id="inventories" className='container my-5'>
            <h1 className='text-Secondary fw-bold text-center mb-5 mx-auto'>Manage Inventories</h1>
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Supplier</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        cars.map(car => <tr key={car._id}>
                            <td>
                                <img className='car-image' src={car.img} alt='' />
                            </td>
                            <td>{car.name} </td>
                            <td>{car.supplier} </td>
                            <td><small>{car.description}</small></td>
                            <td>{car.price}</td>
                            <td>{car.quantity}</td>
                            <td><button onClick={() => handleDelete(car._id)}><FontAwesomeIcon className='trashIcon' icon={faTrashCan} fade /></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default AllInventory;