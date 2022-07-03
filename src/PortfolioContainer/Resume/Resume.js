import React from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

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
                                    <Nav.Link eventKey="first">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Programming Skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">My Goal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">Interests</Nav.Link>
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
                                <Tab.Pane eventKey="third">
                                    <div>Comming Soon !</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                    <div>Comming Soon !</div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </div>
    );
};

export default Resume;