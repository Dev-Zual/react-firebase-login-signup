import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Longin = () => {
  const [validated, setValidated] = useState(false);

  // bootstrap form validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
              //   onBlur={handleEmail}
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
              placeholder="Your password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Sign Up</Button>
      </Form>
      <p className="mt-4">
        Don't have an acount?
        <Link to="/signup">
          <p className="btn btn-link text-decoration-none">
            Please sign up here
          </p>
        </Link>
      </p>
    </div>
  );
};

export default Longin;
