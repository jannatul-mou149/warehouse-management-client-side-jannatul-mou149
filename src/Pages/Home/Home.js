import React from 'react';
import AmazingTeam from './AmazingTeam/AmazingTeam';
import Banner from './Banner';
import CompanyOverview from './CompanyOverview/CompanyOverview';
import DeliveryZone from './DeliveryZone/DeliveryZone';
import Inventories from './Inventories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DeliveryZone></DeliveryZone>
            <Inventories></Inventories>
            <AmazingTeam></AmazingTeam>
            <CompanyOverview></CompanyOverview>
        </div>
    );
};

export default Home;