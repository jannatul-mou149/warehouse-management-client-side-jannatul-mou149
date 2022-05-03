import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [cars, setCars] = useState([]);

    useEffect(() => {

        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setCars(data);
        }
        getMyItems();
    }, [user]);
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
        <div className='container my-5'>
            <h1 className='text-Secondary fw-bold text-center mb-5 mx-auto'>My Items</h1>
            <table className="mx-auto">
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
                            <td><button onClick={() => handleDelete(car._id)}><FontAwesomeIcon className='trashIcon' icon={faTrashCan} beatFade /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyItems;