import React from 'react';
import img from '../../assets/home/profile.jpg';
import Button from 'react-bootstrap/Button';

const AboutMe = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>ABOUT <span className='text-danger'>ME</span></h1>
            <h6 className='text-center mb-3'>My formal Bio Details</h6>
            <div className='row shadow-lg'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={img} alt='no internet' />
                </div>
                <div className='col-md-6'>
                    <p className='m-3 mt-5'>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>

                    <h4 className='ms-3 mt-5'>Here are a Few Highlights:</h4>
                    <p className='ms-3 mt-2'> <i className="fa-solid fa-circle-arrow-right"></i> Full Stack web and mobile development <br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Interactive Front End as per the design<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> React and React Native<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Redux for State Mnanagement<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Building REST API<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Managing database</p>

                    <div className='profile-options mt-5 m-3'>
                        <Button variant="outline-dark" className='primary-text rounded-pill'>
                        {" "}
                            HIRE ME{" "}
                        </Button>
                        <a href='Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf' download="resume Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf">
                            <Button variant="warning" className='highlighted-btn rounded-pill'>DOWNLOAD RESUME</Button>{' '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;