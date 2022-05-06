import React, { useEffect, useState } from 'react';
import './Supplier.css';

const Supplier = () => {
    const [supplierInfos, setSupplierInfos] = useState([]);
    useEffect(() => {
        fetch('https://stark-scrubland-34079.herokuapp.com/supplierInfo')
            .then(res => res.json())
            .then(data => setSupplierInfos(data))
    }, []);
    return (
        <div className='container my-5'>
            <h1 className='text-Secondary fw-bold text-center mb-4 mx-auto'>Supplier Information</h1>
            <div className='row'>
                <div className='inventories-container'>
                    {
                        supplierInfos.map(supplierInfo => <div class="supplier-container" key={supplierInfo._id}>
                            <img src={supplierInfo.img} alt='' />
                            <h6><span>{supplierInfo.supplierName}</span>{supplierInfo.company}</h6>
                            <p>Car Maker: {supplierInfo.carMaker}</p>
                            <p>Country Origin: {supplierInfo.origin}</p>
                            <p>Contact: {supplierInfo.contact}</p>
                            <p>Phycical Address: {supplierInfo.address}</p>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Supplier;