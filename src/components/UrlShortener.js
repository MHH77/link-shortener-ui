import React, { useState, useEffect } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/url");
      setUrls(response.data);
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newUrl = { shortUrl, longUrl };
    if (shortUrl == "") {
      alert("shortUrl must not Empty !");
      return;
    }
    if (longUrl == "") {
      alert("longUrl must not Empty !");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/url", newUrl);
      fetchUrls();
      setShortUrl("");
      setLongUrl("");
    } catch (error) {
      console.error("Error creating URL:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/url/${id}`);
      setUrls(urls.filter((url) => url.id !== id));
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  return (
    <div className=" mt-5 container">
      <div className="card">
        <form className="mt-4">
          <div className="card-footer">Linke Shortener</div>
          <div className="card-body">
            <label htmlFor="shortUrl" className="form-label">
              Short URL
            </label>
            <input
              type="text"
              className="form-control"
              id="shortUrl"
              placeholder="Enter Short URL"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              required
            />
          </div>
          <div className="card-body">
            <label htmlFor="longUrl" className="form-label">
              Long URL
            </label>
            <input
              type="text"
              className="form-control"
              id="longUrl"
              placeholder="Enter Long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add URL
          </button>
        </form>
        <div className="mt-5">
          <h2>Saved URLs</h2>
          <ul className="list-group">
            {urls.map((url) => (
              <li
                key={url.id}
                className="list-group-item  d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{url.shortUrl}</strong> - {url.longUrl}
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(url.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;
