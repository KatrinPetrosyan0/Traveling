import React from 'react';
import './styles.scss';
import LeftSide from '../../components/left-side/left-side';
import back4 from '../../assets/flights.png';
import RightSide from '../../components/right-side/right-side';

const Flights = () => {
    return (

        <section id="flights" class="active">
            <div className='container'>
                <LeftSide
                    image={back4}
                    title='FLIGHTS'
                    close='Close'
                />
                <RightSide>
                    <div id="e265_237">
                        <div id="e265_238">
                            <span id="ei265_238_2_8">
                                FIRST CLASS
                    </span>
                        </div>
                        <span id="e265_239">
                            Ensuring you are comfortable and well rested, First Class cabins will transform your journey into the ultimate luxury experience.
                    </span>
                    </div>
                    <div id="e265_237">
                        <div id="e265_238">
                            <span id="ei265_238_2_8">
                                BUSINESS CLASS
                    </span>
                        </div>
                        <span id="e265_239">
                            Successful business conferences and meetings require your full attention and concentration. Ensuring good sleep throughout your journey is a key step in this aspect.

                    </span>
                    </div>
                    <div id="e265_237">
                        <div id="e265_238">
                            <span id="ei265_238_2_8">
                                BUSINESS CLASS
                    </span>
                        </div>
                        <span id="e265_239">
                            Priority treatment with extra choices and exclusive priviliges can go a long way to making your holiday journey much more enjoyable.

                    </span>
                    </div>





                </RightSide>
            </div></section>
    )
};
export default Flights;