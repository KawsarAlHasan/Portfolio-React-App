import React from 'react';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';

const Resume = (props) => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>RE<span className='text-danger'>SUME</span></h1>
            <h6 className='text-center mb-3'>My formal Bio Details</h6>
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>Comming Soon !</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>Comming Soon !</div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                <div class="resume-card">
                    <div class="resume-bullets">
                        <div class="bullet-container">
                            <div class="bullet-icons">
                            </div><div class="bullets">
                                <div class="bullet selected-bullet">
                                    <img class="bullet-logo" src="/static/media/education.10cfa28a.svg" alt="B" />
                                    <span class="bullet-label">Education</span></div><div class="bullet">
                                    <img class="bullet-logo" src="/static/media/work-history.a566475d.svg" alt="B" />
                                    <span class="bullet-label">Work History</span></div><div class="bullet">
                                    <img class="bullet-logo" src="/static/media/programming-skills.d19983a9.svg" alt="B" />
                                    <span class="bullet-label">Programming Skills</span></div><div class="bullet">
                                    <img class="bullet-logo" src="/static/media/projects.2b352a52.svg" alt="B" />
                                    <span class="bullet-label">Projects</span></div><div class="bullet">
                                    <img class="bullet-logo" src="/static/media/interests.809890a3.svg" alt="B" />
                                    <span class="bullet-label">Interests</span></div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="resume-bullet-details">
                        <div class="resume-details-carousal" style="transform: translateY(0px);">
                            <div class="resume-screen-container"><div class="resume-heading">
                                <div class="resume-main-heading"><div class="heading-bullet">
                                </div>
                                    <span>University of Legon Accra, Ghana</span><div class="heading-date">2014-2018</div>
                                </div>
                                <div class="resume-sub-heading"><span>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</span></div>
                                <div class="resume-heading-description"><span></span>
                                </div>
                                </div>
                                <div class="resume-heading"><div class="resume-main-heading">
                                    <div class="heading-bullet">
                                        </div><span>National Youth Service Corps</span><div class="heading-date">2019-2020</div></div><div class="resume-sub-heading"><span>Ministry Of Science And Technogy. Uyo Akwa Ibom State</span></div><div class="resume-heading-description"><span></span></div></div><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>High School </span><div class="heading-date">2007-2012</div></div><div class="resume-sub-heading"><span>Command Secondary School Mbiri</span></div><div class="resume-heading-description"><span></span></div></div></div><div class="resume-screen-container"><div class="experience-container"><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Ehizeex Technoloy</span><div class="heading-date">2021-Present</div></div><div class="resume-sub-heading"><span>FULL STACK DEVELOPER INTERN</span></div><div class="resume-heading-description"><span></span></div></div><div class="experience-description"><span class="resume-description-text">Currently working as MERN stack web and mobile developer and also an online instructor on udemy.</span></div><div class="experience-description"><span class="resume-description-text">- Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .</span><br /><span class="resume-description-text">- Integrated the web app with backend services to create new user onboarding application with dynamic form content. </span><br /><span class="resume-description-text">- I stretch my mental capacity to develope UI as per the given designs.</span><br /></div></div></div><div class="resume-screen-container programming-skills-container"><div class="skill-parent"><div class="heading-bullet"></div><span>JavaScript</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 85%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>React JS</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 85%;"></div></div></div><div class="skill-parent"><div class="heading-bullet">
                                </div><span>React Native</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 85%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>Express JS</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 89%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>Node JS</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 89%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>Mongo Db</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 70%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>Core Java</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 80%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>HTML</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 80%;"></div></div></div><div class="skill-parent"><div class="heading-bullet"></div><span>CSS</span><div class="skill-percentage"><div class="active-percentage-bar" style="width: 80%;"></div></div></div></div><div class="resume-screen-container"><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Personal Portfolio Website</span><div class="heading-date">2020-2021</div></div><div class="resume-sub-heading"><span>Technologies Used: React JS, Bootsrap</span></div><div class="resume-heading-description"><span>A Personal Portfolio website to showcase all my details and projects at one place.</span></div></div>
                                    <div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Mobile E-shop </span><div class="heading-date">2020-2021</div></div><div class="resume-sub-heading"><span>Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.</span></div><div class="resume-heading-description"><span>An ecommerce application designed to sell products online wth payment system integration</span></div></div><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Ecommerce Website </span><div class="heading-date">2020-2021</div></div><div class="resume-sub-heading"><span>Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.</span></div><div class="resume-heading-description"><span>Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe</span></div></div></div><div class="resume-screen-container"><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Teaching</span><div></div></div><div class="resume-sub-heading"><span></span></div><div class="resume-heading-description"><span>Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.</span></div></div><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Music</span><div></div></div><div class="resume-sub-heading"><span></span></div><div class="resume-heading-description"><span>Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.</span></div></div><div class="resume-heading"><div class="resume-main-heading"><div class="heading-bullet"></div><span>Competitive Gaming</span><div></div></div><div class="resume-sub-heading"><span></span></div><div class="resume-heading-description"><span>I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
            );
};

            export default Resume;