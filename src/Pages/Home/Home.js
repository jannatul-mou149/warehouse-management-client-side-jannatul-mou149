import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import AmazingTeam from './AmazingTeam/AmazingTeam';
import Banner from './Banner';
import CompanyOverview from './CompanyOverview/CompanyOverview';
import DeliveryZone from './DeliveryZone/DeliveryZone';
import Inventories from './Inventories';


const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://stark-scrubland-34079.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div>
            {
                cars[0]?.img ? <div>
                    <Banner></Banner>
                    <DeliveryZone></DeliveryZone>
                    <Inventories></Inventories>
                    <AmazingTeam></AmazingTeam>
                    <CompanyOverview></CompanyOverview>
                </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Home;