import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/kawsar-al-hasan-1b985420a/'>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href='https://github.com/KawsarAlHasan'>
                                <i className="fa-brands fa-github-square"></i>
                            </a>
                            <a href='https://web.facebook.com/kawsar.alhasan.58/'>
                                <i className="fa-brands fa-facebook-square"></i>
                            </a>
                            <a href='https://twitter.com/kawsaralhasan2'>
                                <i className="fa-brands fa-twitter-square"></i>
                            </a>
                            <a href='https://www.instagram.com/kawsar.alhasan.58/'>
                                <i className="fa-brands fa-instagram-square"></i>
                            </a>
                        </div>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Kawsar Al Hasan</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    steps={[
                                        "Full Stact Developer💻", 1000,
                                        "React Developer 🌐", 1000,
                                        "MERN Stact Developer📱", 1000,
                                        "Web Designner 🔴", 1000,
                                        "Web Developer 😎", 1000,
                                    ]}
                                    loop={Infinity}
                                />
                                
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='#contactMe'>
                        <Button variant="outline-light" className='primary-text rounded-pill'>
                        {" "}
                            HIRE ME{" "}
                        </Button>
                        </a>
                        <a href='Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf' download="resume Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf">
                            <Button variant="warning" className='highlighted-btn rounded-pill'>DOWNLOAD RESUME</Button>{' '}
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;