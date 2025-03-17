// src/components/Login/Login.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //todo
    console.log("Password:", password);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center animated-background"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center ">
        <Col
          xs={12}
          sm={8}
          md={6}
          lg={4}
          className="border p-5 rounded bg-body"
          style={{ maxWidth: "450px" }}
        >
          {" "}
          {/* Added max-width */}
          <h2 className="text-center mb-4">Log in and start sharing</h2>
          <p className="text-center">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>{" "}
          <div className="d-grid gap-2 mb-3">
            <Button
              variant="light"
              className="d-flex align-items-center justify-content-center"
            >
              <FcGoogle className="me-2" size={20} /> {/* Google icon */}
              Continue with Google{" "}
            </Button>
            <Button
              variant="light"
              className="d-flex align-items-center justify-content-center"
            >
              <FaApple className="me-2" size={20} /> {/* Apple icon */}
              Continue with Apple
            </Button>
            <Button
              variant="light"
              className="d-flex align-items-center justify-content-center"
            >
              {/*  شما به جای آیکون پیش فرض باید عکسی که آپلود کردید رو قرار بدید  */}
              {/*<Image src="/path/to/your/sso-icon.png" className="me-2" width={20} height={20} />  Replace with your SSO icon */}
              Continue with Single Sign On
            </Button>
          </div>
          <div className="text-center mb-3">OR</div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {" "}
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end mb-3">
              <a href="/forgot-password">Forgot your password?</a>{" "}
            </div>

            <Button variant="primary" type="submit" className="w-100">
              Log in
            </Button>
          </Form>
          <p className="mt-2" style={{ fontSize: "12px" }}>
            By logging in with an account, you agree to Bitly's{" "}
            <a href="">Terms of service</a>, <a href="">Privacy Policy</a> and{" "}
            <a href="">Acceptable Use Policy</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
