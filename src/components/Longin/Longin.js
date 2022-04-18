import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googlImg from '../../images/google.png';

const Longin = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [user, loading1, error1] = useAuthState(auth);
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        {error?.message}
        {error1?.message}
      </p>
    );
  }

  // get input value
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  // bootstrap form validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  const createUserWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center mt-5">Log In</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            className="mt-4"
            as={Col}
            md="12"
            controlId="validationCustom05"
          >
            <Form.Label>Your eamil</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Your email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mt-4"
            as={Col}
            md="12"
            controlId="validationCustom05"
          >
            <Form.Label>Your password</Form.Label>
            <Form.Control
              type="password"
              onBlur={handlePass}
              placeholder="Your password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button onClick={handleLogIn} type="submit">
          Log In
        </Button>
      </Form>
      <p>{errorElement}</p>
      <div className="mt-4 d-flex align-items-center">
        <p>Don't have an acount?</p>
        <p>
          <Link to="/signup">
            <button className="btn btn-link text-decoration-none">
              Please sign up here
            </button>
          </Link>
        </p>
      </div>
      <div>
        <button
          className="d-flex align-items-center btn btn-secondary"
          onClick={createUserWithGoogle}
        >
          <img style={{ width: '50px' }} src={googlImg} alt="" />
          <p>SignIn with google</p>
        </button>
      </div>
    </div>
  );
};

export default Longin;
