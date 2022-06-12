import React from 'react';
import img1 from '../../assets/car1.png';
import img2 from '../../assets/car2.png';
import img3 from '../../assets/car3.png';

const Projects = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>My Latest<span className='text-danger'> Projects</span></h1>
            <h6 className='text-center mb-3'>My formal Bio Details</h6>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-12'>
                    <div className='shadow-lg rounded text-center pb-3'>
                        <img className='img-fluid mt-2' src={img1} alt="" />
                        <h4 className='mt-3'>Cart Parts</h4>
                        <h6 className='mb-3'>React, MongoDB, Firebase, Node.js React-Bootstrap</h6>
                        <button className='btn btn-primary'><a href='/carParts' className='text-light text-decoration-none'>MORE DETAILS</a></button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                    <div className='shadow-lg rounded text-center pb-3'>
                        <img className='img-fluid mt-2' src={img2} alt="" />
                        <h4 className='mt-3'>Car Management</h4>
                        <h6 className='mb-3'>React, MongoDB, Firebase, Node.js React-Bootstrap</h6>
                        <button className='btn btn-primary'><a href='/carManagement' className='text-light text-decoration-none'>MORE DETAILS</a></button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                    <div className='shadow-lg rounded text-center pb-3'>
                        <img className='img-fluid mt-2' src={img3} alt="" />
                        <h4 className='mt-3'>Mobile Hunter</h4>
                        <h6 className='mb-3'>Javascript ES6, API Integration, Bootstrap, HTML, CSS</h6>
                        <button className='btn btn-primary'><a href='/mobileHunter' className='text-light text-decoration-none'>MORE DETAILS</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;