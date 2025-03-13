// src/components/ShortenLink/ShortenLink.js
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"; // Import icon

const ShortenLink = () => {
  return (
    <Container className="bg-white rounded-3 p-4 shadow-sm my-5">
      <h2 className="h4 fw-bold mb-2">Shorten a long link</h2>
      <p className="text-muted mb-4">No credit card required.</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicLink">
          <Form.Label>Paste your long link here</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://example.com/my-long-url"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Get your link for free
          <BsArrowRight className="ms-2" size={16} />
        </Button>
      </Form>
    </Container>
  );
};

export default ShortenLink;
