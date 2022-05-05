import React from 'react';
import './DeliveryZone.css';
import audi from '../../../images/audi.png';
import honda from '../../../images/honda.png';
import ford from '../../../images/ford.png';
import hyundai from '../../../images/hyundai.png';
import toyota from '../../../images/toyota.png';
import marcedes from '../../../images/marcedes.jpg';
import ferrari from '../../../images/ferrari.png';
import map from '../../../images/map.png';

const DeliveryZone = () => {
    return (
        <div class="delivery mt-5">
            <div class="total-delivery">
                <div class="number">
                    <h1>46,000</h1>
                    <p className='fw-bold mt-3'>Deliveries All Over The World</p>
                </div>
                <div class="brands">
                    <div class="img">
                        <img src={audi} alt="" />
                    </div>
                    <div class="img">
                        <img src={honda} alt="" />
                    </div>
                    <div class="img">
                        <img src={ford} alt="" />
                    </div>
                    <div class="img">
                        <img src={toyota} alt="" />
                    </div>
                    <div class="img">
                        <img src={hyundai} alt="" />
                    </div>
                    <div class="img">
                        <img src={marcedes} alt="" />
                    </div>
                    <div class="img">
                        <img src={ferrari} alt="" />
                    </div>
                </div>
            </div>
            <img id="map" src={map} alt="" />
        </div>
    );
};

export default DeliveryZone;