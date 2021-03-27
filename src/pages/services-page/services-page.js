import React from 'react';
import './styles.scss';
import LeftSide from '../../components/left-side/left-side';
import back3 from '../../assets/flights.png';
import RightSide from '../../components/right-side/right-side';
import {Link} from 'react-router-dom';

const Services = () => {
    return (

        <section data-direction="from-left" className="services" class="active">
            <div className='container'>
                <LeftSide
                    image={back3}
                    title='TRAVEL SELLER'
                    text='Create Unforgettable Journeys'
                    close='Close'
                />
                <RightSide>
                {/* <div className='services'>
                        <h3 className='services-title'>SERVICES</h3>
                        <p className='services-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Libero justo laoreet sit amet cursus sit amet dictum sit. Curabitur gravida arcu ac tortor. Consectetur a erat nam at lectus urna duis convallis</p>
                </div>
                <div id="e265_106">
                        <span  id="ei265_93_2_8">
                        LUXURY CABINS
                        </span>
                    <Link to='/services/flights'>FLIGHTS</Link>
                       
                </div>
                <div id="e265_107">
                        <span  id="ei265_95_2_8">
                            4+ STARS
                        </span>
                    <div id="e265_96">
                        <span  id="ei265_96_2_8">HOTELS</span></div>
                </div>
                <div id="e265_108">
                        <span  id="ei265_97_2_8">
                            10+ TYPES
                        </span>
                    </div>
                    <div id="e265_98">
                        <span  id="ei265_98_2_8">
                            EXPERIENCES
                        </span>
                    </div> */}
                </RightSide>
            </div>
        </section>
    )
}

export default Services;