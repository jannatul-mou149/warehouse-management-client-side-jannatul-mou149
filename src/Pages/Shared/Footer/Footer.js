import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="main-row">
                    <div className="single_footer">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Simply dummy text</a></li>
                            <li><a href="/">The printing and typesetting </a></li>
                            <li><a href="/">Standard dummy text</a></li>
                            <li><a href="/">Type specimen book</a></li>
                        </ul>
                    </div>
                    <div className="single_footer single_footer_address">
                        <h4>Page Link</h4>
                        <ul>
                            <li><a href="/">Lorem Ipsum</a></li>
                            <li><a href="/">Simply dummy text</a></li>
                            <li><a href="/">The printing and typesetting </a></li>
                            <li><a href="/">Standard dummy text</a></li>
                            <li><a href="/">Type specimen book</a></li>
                        </ul>
                    </div>
                    <div className="sub-social">
                        <div className="single_footer single_footer_address">
                            <h4>Join Us</h4>
                            <ul>
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Simply dummy text</a></li>
                            </ul>

                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="copy-right">
                        <p className="copyright">Copyright © 2022 <a href="/">AutoMoto</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;