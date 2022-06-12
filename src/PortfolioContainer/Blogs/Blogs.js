import React from 'react';
import commingSoon from '../../assets/home/commingSoon.jpeg';

const Blogs = (props) => {
    return (
        <div id='blogs' className='container'>
            <h1 className='text-center my-3'>BLO<span className='text-danger'>GS</span></h1>
            <div className='mx-5'>
                <img className='img-fluid' src={commingSoon} alt='no internet' />
            </div>
        </div>
    );
};

export default Blogs;