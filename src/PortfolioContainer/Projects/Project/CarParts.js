import React from 'react';
import { Carousel } from 'react-bootstrap';
import parts from '../../../assets/parts1.png';
import parts2 from '../../../assets/parts2.png';
import parts3 from '../../../assets/parts3.png';

const CarParts = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>CAR<span className='text-danger'> PARTS</span></h1>
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
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://car-parts-react-app.web.app/'>Live Site</a></button>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://github.com/KawsarAlHasan/car-parts-manufacturer'>Github Client Code</a></button>
                <button className='btn btn-primary'> <a className='text-light text-decoration-none' href='https://github.com/KawsarAlHasan/manufacturer-website-server-side'>Github Server Code</a></button>
            </div>
            <div>
                <h6><span className='fw-bold'>Technology Used:</span> React.js, Node, Express, MongoDB, Firebase, React-Bootstrap </h6>
                <p><span className='fw-bold'>Features:</span> <br />
                    ● It has two dashboards one for users another for the admin. <br />
                    ● Admin can add a new product, delete a product, make an admin, manage the product. <br />
                    ● Users can log in, review this site, and check their product status. <br />
                    ● Then the login page has been created. <br />
                    ●  Then register and social login has been created. <br />
                    ●  After that my portfolio and blogs and 404 page were created.</p>
            </div>
        </div>
    );
};

export default CarParts;