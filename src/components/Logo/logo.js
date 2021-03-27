import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.svg'

const Logo = () => {
    return (
        <div className="logo top-position">
            <img src={logo} alt="Logo" />;
        </div>
    )
}
export default Logo;