import React from "react";
import Hero from "./hero";
import Navbar from "./Navbar";
import ServicesBar from "./ServicesBar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <ServicesBar />
      <Hero />
    </header>
  );
};

export default Header;
