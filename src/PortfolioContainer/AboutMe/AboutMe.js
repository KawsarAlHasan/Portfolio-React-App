import React from 'react';
import img from '../../assets/home/profile.jpg';
import Button from 'react-bootstrap/Button';

const AboutMe = (props) => {
    return (
        <div id='aboutMe' className='container'>
            <h1 className='text-center mt-3'>ABOUT <span className='text-danger'>ME</span></h1>
            <h6 className='text-center mb-3'>My formal Bio Details</h6>
            <div className='row shadow-lg'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={img} alt='no internet' />
                </div>
                <div className='col-md-6'>
                    <p className='m-3 mt-5'>Hi, I'm Kawsar Al Hasan. I'm very passionate and dedicated to my work. My strengths are dedication, a positive attitude, and hard work. I enjoy every step of the developing process from discussion and collaboration.</p>

                    <h4 className='ms-3 mt-5'>Here are a Few Highlights:</h4>
                    <p className='ms-3 mt-2'> <i className="fa-solid fa-circle-arrow-right"></i> Full Stack web development <br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Interactive Front End as per the design<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> React JS<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Redux for State Mnanagement<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Building REST API<br/>
                    <i className="fa-solid fa-circle-arrow-right"></i> Managing database</p>

                    <div className='profile-options mt-5 m-3'>
                        <a href='#contactMe'>
                        <Button variant="outline-dark" className='primary-text rounded-pill'>
                        {" "}
                            HIRE ME{" "}
                        </Button>
                        </a>
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