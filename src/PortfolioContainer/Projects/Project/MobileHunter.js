import React from 'react';
import { Carousel } from 'react-bootstrap';
import parts from '../../../assets/ph1.png';
import parts2 from '../../../assets/ph2.png';
import parts3 from '../../../assets/ph3.png';

const MobileHunter = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>Mobile<span className='text-danger'> Hunter</span></h1>
            <div className='mx-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={parts}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={parts2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={parts3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='d-flex justify-content-around gap-3 my-3'>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://serene-colden-f0f207.netlify.app/'>Live Site</a></button>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://github.com/KawsarAlHasan/phone-hunter'>Github Code</a></button>
            </div>
            <div>
                <h6><span className='fw-bold'>Technology Used:</span> Javascript ES6, API Integration, Bootstrap, HTML, CSS</h6>
                <p><span className='fw-bold'>Features:</span> <br />
                    ● If you search the phone here, you will see that phone as a result on the screen.<br />
                    ● Clicking on the more details button shows the details of that phone.<br />
                    ● Here is the information taken from API and Designed with bootstrap and css.</p>
            </div>
        </div>
    );
};

export default MobileHunter;