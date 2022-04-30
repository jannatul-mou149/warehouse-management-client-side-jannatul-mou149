import React, { useEffect, useState } from 'react';
import './Inventories.css';
import Inventory from './Inventory';
const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, []);
    return (
        <div id="inventories" className='container my-5'>
            <div className="row">
                <h1 className='text-Secondary fw-bold text-center mb-5'>Inventories</h1>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;