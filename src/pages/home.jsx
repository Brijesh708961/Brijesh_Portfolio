import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="conatact">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
