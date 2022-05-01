import React, { useEffect, useState } from 'react';
import AllInventories from '../AllInventories/AllInventories';


const AllInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div>
            <div id="inventories" className='container my-5'>
                <div className="row">
                    <h1 className='text-Secondary fw-bold text-center mb-5'>All Inventories</h1>
                    <div className="inventories-container">
                        {
                            cars.map(car => <AllInventories
                                key={car._id}
                                car={car}
                            >
                            </AllInventories>)
                        }
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AllInventory;