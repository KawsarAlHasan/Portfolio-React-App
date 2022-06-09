import React from 'react';
import './Home.css';
import Typical from 'react-typical';

const Home = (props) => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/kawsar-al-hasan-1b985420a/'>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/KawsarAlHasan'>
                            <i class="fa-brands fa-github-square"></i>
                        </a>
                        <a href='https://web.facebook.com/kawsar.alhasan.58/'>
                            <i class="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href='https://twitter.com/kawsaralhasan2'>
                            <i class="fa-brands fa-twitter-square"></i>
                        </a>
                        <a href='https://www.instagram.com/kawsar.alhasan.58/'>
                            <i class="fa-brands fa-instagram-square"></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Kawsar Al Hasan</span>
                        </span>
                    </div>
                    <div className='profile-deails-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    steps={[
                                        "Full Stact Developer", 1000,
                                        "React Developer", 1000,
                                        "MERN Stact Developer", 1000,
                                        "Web Designner", 1000,
                                        "Web Developer", 1000,
                                    ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn'>HIRE ME</button>
                        <button className='btn'>DOWNLOAD RESUME</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;