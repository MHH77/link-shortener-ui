// src/components/Header/Header.js
import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-warning fw-bold fs-2">
          J2MHH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/platform">
              Platform
            </Nav.Link>
            <Nav.Link as={Link} to="/solutions">
              Solutions
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#">
                EN
              </NavDropdown.Item>
              {/* Add other language options here */}
            </NavDropdown>
            <Nav.Link as={Link} to="/login">
              Log in
            </Nav.Link>{" "}
            {/* Use Link */}
            <Button variant="outline-primary" className="me-2">
              Get a Quote
            </Button>
            <Button variant="outline-primary" as={Link} to="/signup">
              Sign up Free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
