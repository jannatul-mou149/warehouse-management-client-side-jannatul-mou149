import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const params = useParams();
    return (
        <div>
            <h1>Inventory details</h1>
            <p>Details of inventory : {params.id}</p>

        </div>
    );
};

export default InventoryDetails;