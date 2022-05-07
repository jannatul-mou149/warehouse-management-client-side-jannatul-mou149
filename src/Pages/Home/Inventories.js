import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './Inventories.css';
import Inventory from './Inventory';
const Inventories = () => {
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
            {
                cars[0]?.img ? <div>
                    <div id="inventories" className='container my-5'>
                        <div className="row">
                            <h1 className='text-Secondary fw-bold text-center mb-5'>Inventories</h1>
                            <div className="inventories-container">
                                {
                                    cars.slice(0, 6).map(car => <Inventory
                                        key={car._id}
                                        car={car}
                                    >
                                    </Inventory>)
                                }
                            </div>
                            <div className='text-center'>
                                <button onClick={navigateToInventory} className='btn'>Manage Inventory</button>
                            </div>
                        </div>
                    </div >
                </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Inventories;