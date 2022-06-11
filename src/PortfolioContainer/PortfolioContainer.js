import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Resume from './Resume/Resume';

const PortfolioContainer = (props) => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <ContactMe></ContactMe>
        </div>
    );
};

export default PortfolioContainer;