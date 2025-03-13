import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ShortenLink from "./components/ShortenLink/ShortenLink";

const App = () => {
  return (
    <div style={{ backgroundColor: "#0d6efd", minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <ShortenLink />
    </div>
  );
};
export default App;
