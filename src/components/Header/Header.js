import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand to="/">GYM TRAINER</Navbar.Brand>
            <Nav className="me-auto nav-item">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/blog">Blog</CustomLink>
            </Nav>

            <Nav className="nav-item">
              <>{user && <p className="text-white">{user.email}</p>}</>
              {user ? (
                <button
                  onClick={logOut}
                  className="btn btn-link log-out text-white"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
