import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png';

const Navber = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img style={{width: "30px"}} src={logo} alt='no internet'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="#aboutMe">ABOUT ME</Nav.Link>
                        <Nav.Link href='Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf' download="resume Kawsar_Al_Hasan_JUNIOR_FULL_STACK_DEVELOPER.pdf">GET RESUME</Nav.Link>
                        <Nav.Link href="#blogs">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#contactMe">CONTACT ME</Nav.Link>
                        <Nav.Link href="/">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;