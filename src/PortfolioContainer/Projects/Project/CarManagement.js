import React from 'react';
import { Carousel } from 'react-bootstrap';
import parts from '../../../assets/cm1.png';
import parts2 from '../../../assets/cm2.png';
import parts3 from '../../../assets/cm3.png';

const CarManagement = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>Car<span className='text-danger'> Management</span></h1>
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
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://warehouse-management-react-app.web.app/'>Live Site</a></button>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://github.com/KawsarAlHasan/Car-Management-client'>Github Client Code</a></button>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://github.com/KawsarAlHasan/Car-Management-server-side'>Github Server Code</a></button>
            </div>
            <div>
                <h6><span className='fw-bold'>Technology Used:</span> React.js, Node, Express, MongoDB, Firebase, React-Bootstrap </h6>
                <p><span className='fw-bold'>Features:</span> <br />
                    ● It has two parts, one for users and another for the admin.<br />
                    ● Users can add products, delete products, and manage products.<br />
                    ● Register, login, social login, email verify, password reset, manage item.<br />
                    ● Then register and social login has been created. <br />
                    ● After that blogs and 404 page were created.</p>
            </div>
        </div>
    );
};

export default CarManagement;