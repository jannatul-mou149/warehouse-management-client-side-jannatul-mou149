import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './ManageInventory.css';
const ManageInventory = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://stark-scrubland-34079.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stark-scrubland-34079.herokuapp.com/car/${id}`;
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
    const handleAddItem = () => {
        navigate('/addItems')
    }
    const navigateToAllInventory = () => {
        navigate(`/allInventory`);
    }
    return (
        <div>
            {
                cars[0]?.img ? <div>
                    <div id="inventories" className='container my-5'>
                        <h1 className='text-Secondary fw-bold text-center mb-5 mx-auto'>Manage Inventories</h1>
                        <button onClick={handleAddItem} className='btnn'>Add Items<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
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
                        <div className='text-center'>
                            <button className='btn' onClick={navigateToAllInventory}>All Inventory</button>
                        </div>
                    </div >
                </div> : <Loading></Loading>
            }
        </div>
    );
};

export default ManageInventory;