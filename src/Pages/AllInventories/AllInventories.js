import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllInventory from '../AllInventory/AllInventory';

const AllInventories = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://stark-scrubland-34079.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate(`/car/inventory`);
    }
    return (
        <div>
            <div id="inventories" className='container my-5'>
                <div className="row">
                    <h1 className='text-Secondary fw-bold text-center mb-5'>All Inventories</h1>
                    <div className="inventories-container">
                        {
                            cars.map(car => <AllInventory
                                key={car._id}
                                car={car}
                            >
                            </AllInventory>)
                        }
                    </div>
                    <div className='text-center'>
                        <button onClick={navigateToInventory} className='btn'>Manage Inventory</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AllInventories;