import React from 'react';
import './styles.scss';
import LeftSide from '../../components/left-side/left-side';
import back1 from '../../assets/about-bg.png';
import RightSide from '../../components/right-side/right-side';

const About = () => {
    return (

        <section data-direction="from-top" id="about" class="active">
            <div className='container'>
                <LeftSide
                    image={back1}
                    title='TRAVEL SELLER'
                    text='Create Unforgettable Journeys'
                    close='Close'
                />
                <RightSide>
                    <div className='about'>
                        <h3 className='about-title'>About</h3>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Libero justo laoreet sit amet cursus sit amet dictum sit. Curabitur gravida arcu ac tortor. Consectetur a erat nam at lectus urna duis convallis</p>
                    </div>
                    <div id="about2">
                        <div id="div1">
                            <span id="business">
                                YEARS IN BUSINESS
                            </span>
                        </div>
                        <div id="div2">
                            <span id="a">
                                9
                            </span>
                       </div>
                    </div>
                    <div id="about3">
                        <div id="div3">
                            <span id="b">
                                56
                            </span>
                        </div>
                        <div id="div4">
                            <span id="clients">
                                HAPPY CLIENTS
                        </span>
                        </div>
                    </div>
                    <div id="about4">
                        <div id="div5">
                            <span id="locations">
                                LOCATIONS
                            </span>
                        </div>
                        <span id="c">
                            4
                        </span>
                    </div>
                    <div id="about5">
                        <div id="div6">
                            <span id="e">
                                40
                            </span>
                        </div>
                        <div id="div7">
                            <span id="destinations">
                                DESTINATIONS
                            </span>
                        </div>
                    </div>
                </RightSide>
            </div></section>
    )
};
export default About;