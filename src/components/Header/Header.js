// src/components/Header/Header.js
import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="text-warning fw-bold fs-2">
          J2MHH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Platform</Nav.Link>
            <Nav.Link href="#">Solutions</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="EN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">EN</NavDropdown.Item>
              {/* Add other language options here */}
            </NavDropdown>
            <Nav.Link href="#">Log in</Nav.Link>
            <Button variant="outline-primary" className="me-2">
              Get a Quote
            </Button>
            <Button variant="outline-primary">Sign up Free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
