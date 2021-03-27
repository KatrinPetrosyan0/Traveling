import React from 'react';
import NavBar from '../../components/nav-bar/nav-bar';
import Logo from '../../components/Logo/logo';
import './styles.scss';
import MainTitle from '../../components/main-title/MainTitle';


const HomePage = () => {
    return (
        <main>
            <Logo />
            <div className="bottom-credits bottom-position">
                TRAVEL SELLERS &copy; 2021 All Rights Reserved.
            </div>
            <NavBar />
           <MainTitle />
            
        </main>
    )
};

export default HomePage;