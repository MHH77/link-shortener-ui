// src/components/ResolveShortUrl/ResolveShortUrl.js
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ResolveShortUrl = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResolve = async () => {
    setLoading(true);
    setError("");
    setOriginalUrl("");
    try {
      const response = await fetch(`/api/url/short?originalUrl=${shortUrl}`);
      if (response.ok) {
        const data = await response.text();
        setOriginalUrl(data);
      } else {
        if (response.status === 404) {
          setError("Short URL not found.");
        } else {
          setError("An error occurred while resolving the URL.");
        }
      }
    } catch (error) {
      setError("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Resolve Short URL</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formShortUrl">
          <Form.Label>Enter Short URL:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter short URL"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleResolve} disabled={loading}>
          {loading ? "Resolving..." : "Get Original URL"}
        </Button>
      </Form>
      {originalUrl && (
        <Alert variant="success" className="mt-3">
          Original URL:{" "}
          <a href={originalUrl} target="_blank" rel="noopener noreferrer">
            {originalUrl}
          </a>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default ResolveShortUrl;
