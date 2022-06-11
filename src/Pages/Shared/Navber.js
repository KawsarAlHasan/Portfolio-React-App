import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navber = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="#resume">RESUME</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#contactMe">CONTACT ME</Nav.Link>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;