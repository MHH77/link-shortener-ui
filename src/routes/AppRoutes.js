// src/routes/AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ShortenLink from "../components/ShortenLink/ShortenLink"; // Import ShortenLink
import UrlList from "../components/UrlList/UrlList";
import ResolveShortUrl from "../components/ResolveShortUrl/ResolveShortUrl";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={{ backgroundColor: "#0d6efd", minHeight: "10vh" }}>
                <HeroSection />
              </div>
              <ShortenLink />
              <UrlList />
              <ResolveShortUrl />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
