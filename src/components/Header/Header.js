import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/">Fitness Zone</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#features">Sing Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
