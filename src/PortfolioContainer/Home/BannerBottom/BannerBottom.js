import React from 'react';
import './BannerBottom.css';
import bannerBottom from '../../../assets/home/shape-bg.png';

const BannerBottom = (props) => {
    return (
        <div className='banner-container'>
            <div className='banner-parent'>
                <img src={bannerBottom} alt="no intternet"/>
            </div>
        </div>
    );
};

export default BannerBottom;