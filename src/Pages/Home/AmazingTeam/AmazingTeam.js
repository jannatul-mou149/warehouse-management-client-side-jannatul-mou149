import React from 'react';
import man1 from '../../../images/man1.jpg';
import man2 from '../../../images/man2.jpg';
import man3 from '../../../images/man3.jpg';
import man4 from '../../../images/man4.jpg';
import './AmazingTeam.css';
const AmazingTeam = () => {
    return (
        <div class="team">
            <div class="meet-team">
                <div class="our-team">
                    <div class="line"></div>
                    <p>Our Team</p>
                </div>
                <div class="title">
                    <h1>Meet Our <span>Amazing Team</span></h1>
                </div>
                <div class="team-member">
                    <div class="member-1 member">
                        <img id="a1" src={man1} alt="" />
                        <div id="b1" class="member-info">
                            <p>Chief Financial Officer</p>
                            <h3>Braxton</h3>
                            <div class="member-social">
                                <ul>
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="member-2 member">
                        <img id="a2" src={man2} alt="" />
                        <div id="b2" class="member-info">
                            <p>Chief Operating Officer</p>
                            <h3>Wesley</h3>
                            <div class="member-social">
                                <ul>
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="member-3 member">
                        <img id="a3" src={man3} alt="" />
                        <div id="b3" class="member-info">
                            <p>Chief Marketing Officer</p>
                            <h3>Archie</h3>
                            <div class="member-social">
                                <ul>
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="member-4 member">
                        <img id="a4" src={man4} alt="" />
                        <div id="b4" class="member-info">
                            <p>Chief Technology Officer</p>
                            <h3>Evertt</h3>
                            <div class="member-social">
                                <ul>
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmazingTeam;