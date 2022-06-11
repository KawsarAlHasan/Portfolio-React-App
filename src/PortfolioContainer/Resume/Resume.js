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
                                    <div>This is boss</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>boss is back</div>
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