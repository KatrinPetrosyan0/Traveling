import React from 'react';
import './styles.scss';
import Logo from '../Logo/logo';
import {Link} from 'react-router-dom';

const LeftSide = ({image, title, text,close}) => {
    return (
 
        <div className='ls-container' style={{background: `url(${image})`, height:"947px"}}>
            <div>
            <Link to="/"> <span className="move" href="services">{close}</span></Link>
                <Logo />
                <h1>{title}</h1>
                <p>{text}</p>
                
            </div>
        </div>
    )
}
export default LeftSide;