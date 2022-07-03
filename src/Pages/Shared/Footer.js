import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="bg-dark text-center text-white">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div className="m-6 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className='ms-5'>
                    <a href="https://web.facebook.com/kawsar.alhasan.58/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/kawsaralhasan2" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/kawsar.alhasan.58/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kawsar-al-hasan-1b985420a/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/KawsarAlHasan" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">

                        <div className="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Project
                            </h6>
                            <p>
                                <Link to="/carParts" className="text-reset text-decoration-none">Cart Parts</Link>
                            </p>
                            <p>
                                <Link to="/carManagement" className="text-reset text-decoration-none">Cart Management</Link>
                            </p>
                            <p>
                                <Link to="/mobileHunter" className="text-reset text-decoration-none">Mobile Hunter</Link>
                            </p>
                        </div>

                        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link to="/" className="text-reset text-decoration-none">Home</Link>
                            </p>
                            <p>
                                <a href="#aboutMe" className="text-reset text-decoration-none">About</a>
                            </p>
                            <p>
                                <a href="#project" className="text-reset text-decoration-none">Project</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Gaibandha, Bangladesh</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                kawsaralhasan.420@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +8801785898351</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold text-decoration-none" href="https://web.facebook.com/kawsar.alhasan.58/"> Kawsar Al Hasan</a>
            </div>
        </div>
    );
};

export default Footer;