import React from 'react';
import './CompanyOverview.css';
import signature from '../../../images/signature.png';
import car from '../../../images/car.jpg';
import man from '../../../images/man.jpg';
const CompanyOverview = () => {
    return (
        <div className="overview">
            <div className="img">
                <img src={car} alt="" />
            </div>
            <div className="overview-details">
                <div className="since">
                    <div className="line"></div>
                    <p>since 2002</p>
                </div>
                <div className="title">
                    <h1>Company <span>Overview</span></h1>
                </div>
                <div className="main-part">
                    <div className="text">
                        <p>
                            We opened the doors of the first Company of Cars retail location in 2002 after more than twenty years mixing it up in the hyper competitive automotive wholesale business.Although the facility, our inventory, and the host of services we offer to our clients may have evolved over the years.<br /><br />  At Company of Cars we believe that buying a car should be fun! We believe that our sales and service staff should be informed, and helpful, without being pushy or overbearing.
                        </p>
                    </div>
                    <div className="profile">
                        <div className="ceo-img">
                            <img src={man} alt="" />
                            <div className="signature">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                        <div className="profile-info">
                            <h4>Alfie Hain</h4>
                            <p>CEO and Founder</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;