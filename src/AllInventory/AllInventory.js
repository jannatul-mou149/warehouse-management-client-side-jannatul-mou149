import React, { useEffect, useState } from 'react';
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
        <div>
            <div id="inventories" className='container my-5'>
                <h1 className='text-Secondary fw-bold text-center mb-5 mx-auto'>Manage Inventories</h1>
                <div>
                    {
                        cars.map(car => <div key={car._id}>
                            <h5>{car.name} <button onClick={() => handleDelete(car._id)}>x</button></h5>
                        </div>)
                    }
                </div>
            </div >
        </div>
    );
};

export default AllInventory;