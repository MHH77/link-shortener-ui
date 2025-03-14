// src/components/UrlList/UrlList.js
import React, { useState, useEffect } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

const UrlList = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUrls = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8080/api/url/all");
      if (response.ok) {
        const data = await response.json();
        setUrls(data);
      } else {
        setError("Failed to fetch URLs.");
      }
    } catch (error) {
      setError("An error occurred while fetching URLs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const handleDelete = async (fullShortUrl) => {
    try {
      const shortId = fullShortUrl.split("/").pop();

      const response = await fetch(`http://localhost:8080/api/url/${shortId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUrls(
          urls.filter((url) => url.shortUrl.split("/").pop() !== shortId)
        );
      } else {
        setError("Failed to delete URL.");
      }
    } catch (error) {
      setError("An error occurred while deleting the URL.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>All Shortened URLs</h2>
      {loading ? (
        <p>Loading URLs...</p>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : urls.length === 0 ? (
        <p>No URLs found.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url.id}>
                <td>
                  <a
                    href={url.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.originalUrl}
                  </a>
                </td>
                <td>
                  <a
                    href={url.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.shortUrl}
                  </a>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(url.shortUrl)}
                  >
                    <BsTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default UrlList;
