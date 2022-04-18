import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand to="/">Fitness Zone</Navbar.Brand>
        <Nav className="me-auto nav-item">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
        </Nav>

        <Nav className="nav-item">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
