import React from 'react';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;