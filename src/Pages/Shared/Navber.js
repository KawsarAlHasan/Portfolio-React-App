import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";

const Navber = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "30px" }} src={logo} alt="no internet" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-reset text-decoration-none">
                HOME
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#aboutMe">ABOUT ME</Nav.Link>
            <Nav.Link
              href="resume_of_md_kawsar.pdf"
              download="resume_of_md_kawsar.pdf"
            >
              GET RESUME
            </Nav.Link>
            <Nav.Link href="#blogs">BLOGS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contactMe">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navber;
