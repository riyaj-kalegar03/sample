import React from "react";
import "../../App.css";
import useRef from "react";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import About from "../About";
import Books from "../Books";
import OurServices from "../OurServices";
import TestimonialSection from "../TestimonialSection";
import Blog from "../Blog";
import ResponsiveSection from "../ResponsiveSection";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <OurServices />
      <Books />
      <TestimonialSection />
      <Blog />
      <ResponsiveSection />
      <Footer />
    </>
  );
}

export default Home;
