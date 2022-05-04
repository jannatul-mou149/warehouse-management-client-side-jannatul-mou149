import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Supplier = () => {
    const [supplierInfos, setSupplierInfos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/supplierInfo')
            .then(res => res.json())
            .then(data => setSupplierInfos(data))
    }, []);
    return (
        <div className='container my-5'>
            <h1 className='text-Secondary fw-bold text-center mb-5 mx-auto'>Supplier Information</h1>
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <th>Suppiler Name</th>
                    <th>Company</th>
                    <th>Car Maker</th>
                    <th>Origin</th>
                    <th>Contact</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        supplierInfos.map(supplierInfo => <tr key={supplierInfo._id}>
                            <td>{supplierInfo.supplierName}</td>
                            <td>{supplierInfo.company} </td>
                            <td>{supplierInfo.carMaker} </td>
                            <td><small>{supplierInfo.origin}</small></td>
                            <td>{supplierInfo.contact}</td>
                            <td>{supplierInfo.address}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default Supplier;