import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ShortenLink from "./components/ShortenLink/ShortenLink";
import UrlList from "./components/UrlList/UrlList"; // Import the new component
import ResolveShortUrl from "./components/ResolveShortUrl/ResolveShortUrl"; // Import

const App = () => {
  return (
    <div style={{ backgroundColor: "#0d6efd", minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <ShortenLink />
      <UrlList />
      <ResolveShortUrl />
    </div>
  );
};
export default App;
