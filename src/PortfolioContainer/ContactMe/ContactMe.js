import React from 'react';
import { Button, Form } from 'react-bootstrap';
import email from '../../assets/home/email.svg';

const ContactMe = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>CONTACT <span className='text-danger'>ME</span></h1>
            <h6 className='text-center mb-3'>Lets Keep In Touch</h6>
            <div className='row m-3 shadow-lg'>
                <div className='col-md-6'>
                    <h1 className='mt-3 text-center'>Get In Touch 📧</h1>
                    <div className='m-3 text-center'>
                        <a className='pe-3' href='https://www.linkedin.com/in/kawsar-al-hasan-1b985420a/'>
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                        </a>
                        <a className='pe-3' href='https://github.com/KawsarAlHasan'>
                            <i className="fa-brands fa-github-square fa-xl"></i>
                        </a>
                        <a className='pe-3' href='https://web.facebook.com/kawsar.alhasan.58/'>
                            <i className="fa-brands fa-facebook-square fa-xl"></i>
                        </a>
                        <a className='pe-3' href='https://twitter.com/kawsaralhasan2'>
                            <i className="fa-brands fa-twitter-square fa-xl"></i>
                        </a>
                        <a className='pe-3' href='https://www.instagram.com/kawsar.alhasan.58/'>
                            <i className="fa-brands fa-instagram-square fa-xl"></i>
                        </a>
                    </div>
                    <div>
                        <img className='img-fluid mb-3' src={email} alt='no internet' />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='mt-3'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter your Message" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className='rounded-pill px-5'>
                                SEND {" "}
                                <i className="fa-solid fa-paper-plane"></i>
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;