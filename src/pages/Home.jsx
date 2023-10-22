//import React from 'react'
//import Events from "../components/Events";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section id="hero">
        <HeroSection />
      </section>
    </div>
  );
};

export default Home;
