// src/components/ShortenLink/ShortenLink.js
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const ShortenLink = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setShortenedUrl("");
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8080/api/url/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }), // Send the originalUrl in the request body
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(data.shortUrl); // Assuming the API returns the short URL in a field named 'shortUrl'
      } else {
        // Handle different error responses
        if (response.status === 400) {
          setError("Invalid URL format. Please enter a valid URL.");
        } else if (response.status === 409) {
          setError("This URL has already been shortened.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
    } catch (error) {
      setError(
        "An error occurred. Please check your connection and try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Container className="bg-white rounded-3 p-4 shadow-sm my-5">
      <h2 className="h4 fw-bold mb-2">Shorten a long link</h2>
      <p className="text-muted mb-4">No credit card required.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicLink">
          <Form.Label>Paste your long link here</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://example.com/my-long-url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required // Make the input field required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            <>
              Get your link for free
              <BsArrowRight className="ms-2" size={16} />
            </>
          )}
        </Button>
      </Form>
      {/* Display shortened URL or error message */}
      {shortenedUrl && (
        <Alert variant="success" className="mt-3">
          Your shortened URL:{" "}
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}{" "}
    </Container>
  );
};

export default ShortenLink;
