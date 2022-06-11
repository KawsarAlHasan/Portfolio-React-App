import React from 'react';
import Home from './Banner/Home';
import BannerBottom from './BannerBottom/BannerBottom';
import './MainHome.css';

const MainHome = (props) => {
    return (
        <div className='home-container'>
            <Home></Home>
            <BannerBottom></BannerBottom>
        </div>
    );
};

export default MainHome;