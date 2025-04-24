import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import MainHome from "./Home/MainHome";
import SkillSection from "./skillSection/SkillSection";
import Project from "./project/Project";
import EducationExperience from "./educationExperience/EducationExperience";

const PortfolioContainer = (props) => {
  return (
    <div>
      <MainHome />
      <AboutMe />
      <SkillSection />
      <EducationExperience />
      <Project />
      <ContactMe />
    </div>
  );
};

export default PortfolioContainer;
