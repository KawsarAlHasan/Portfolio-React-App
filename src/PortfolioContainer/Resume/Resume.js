import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProgrammingSkill from "./ProgrammingSkill";
import Education from "./Education";

const Resume = (props) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        RE<span className="text-danger">SUME</span>
      </h1>
      <h6 className="text-center mb-3">My formal Bio Details</h6>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Education">
            <Education />
          </Tab>
          <Tab eventKey="profile" title="Programming Skills">
            <ProgrammingSkill />
          </Tab>
          <Tab eventKey="longer-tab" title="My Goal">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="Interests">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
