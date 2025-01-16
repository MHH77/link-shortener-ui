import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UrlShortener = () => {
    const [shortUrl, setShortUrl] = useState('');
    const [longUrl, setLongUrl] = useState('');
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetchUrls();
    }, []);

    const fetchUrls = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/url');
            setUrls(response.data);
        } catch (error) {
            console.error('Error fetching URLs:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUrl = { shortUrl, longUrl };
        try {
            await axios.post('http://localhost:8080/api/url', newUrl);
            fetchUrls(); // به‌روزرسانی لیست URLها
            setShortUrl('');
            setLongUrl('');
        } catch (error) {
            console.error('Error creating URL:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">URL Shortener</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="shortUrl" className="form-label">Short URL</label>
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
                <div className="mb-3">
                    <label htmlFor="longUrl" className="form-label">Long URL</label>
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
                <button type="submit" className="btn btn-primary">Add URL</button>
            </form>
            <div className="mt-5">
                <h2>Saved URLs</h2>
                <ul className="list-group">
                    {urls.map((url) => (
                        <li key={url.id} className="list-group-item">
                            <strong>{url.shortUrl}</strong> - {url.longUrl}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UrlShortener;