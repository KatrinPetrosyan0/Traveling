import React from 'react';
import './styles.scss';
import LeftSide from '../../components/left-side/left-side';
import back2 from '../../assets/contact.png';
import RightSide from '../../components/right-side/right-side';

const Contact = () => {
    return (

        <section id='contact' data-direction="from-right" className="contact" class="active">
            <div className='container'>
                <LeftSide
                    image={back2}
                    title='TRAVEL SELLER'
                    text='Create Unforgettable Journeys'
                    close='Close'
                />
                <RightSide>
                <div className='contact'>
                        <h3 className='contact-title'>Contact</h3>
                        <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Libero justo laoreet sit amet cursus sit amet dictum sit. Curabitur gravida arcu ac tortor. Consectetur a erat nam at lectus urna duis convallis</p>
                </div>
                <div className="contact2">
                        <div className="div1">
                            <span className="mail">
                            hello@travelseller.com
                            </span>
                        </div>
                        <div className="div2">
                            <span className="a">
                                EMAIL
                            </span>
                       </div>
                </div>
                <div ii="contact3">
                        <div className="div3">
                            <span className="b">
                                CALL
                            </span>
                        </div>
                        <div className="div4">
                            <span className="clients">
                            1-800-123-456
                        </span>
                        </div>
                    </div>
                </RightSide>
            </div>
        </section>
    )
}

export default Contact;