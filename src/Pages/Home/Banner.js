import React from 'react';
import './Banner.css';
import banner from '../../images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <div className="text-left">
                    <h1>720S SPIDER</h1>
                    <p>The McLaren 720S Spider is the embodiment of this approach. A light, strong supercar that delivers ruthless performance.</p>
                    <a href="/">Explore now <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="text-right">
                    <p className="spec"><span className="dot"></span> SPECS</p>
                    <div className="specs">
                        <div className="spec-name">
                            <p>Production</p>
                            <p>Max speed</p>
                            <p>Engine</p>
                        </div>
                        <div className="spec-detail">
                            <p>2017-present</p>
                            <p>300km/h</p>
                            <p>4.0 L M840T</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="banner-image">
                <p>Marcedes</p>
                <img src={banner} alt="" />
            </div>
            <div className="see-more">
                <a href="/">
                    <i><FontAwesomeIcon icon={faArrowRight} /></i>
                    <p> Explore more</p>
                </a>
            </div>
        </div>
    );
};

export default Banner;