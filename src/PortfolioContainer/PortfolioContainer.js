import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Blogs from './Blogs/Blogs';
import ContactMe from './ContactMe/ContactMe';
import MainHome from './Home/MainHome';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

const PortfolioContainer = (props) => {
    return (
        <div>
            <MainHome></MainHome>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <Projects></Projects>
            <Blogs></Blogs>
            <ContactMe></ContactMe>
        </div>
    );
};

export default PortfolioContainer;