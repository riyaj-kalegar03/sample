import React, { useEffect, useRef } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import service1 from "./Broacher.jpeg";
import service2 from "./catelog.jpg";
import service3 from "./digital printing.avif";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const history = useHistory();
  const cardsRef = useRef([]);
  const headlineRef = useRef(null); // Ref for headline
  const paragraphRef = useRef(null); // Ref for paragraph

  const products = [
    {
      image: service1, // Directly use the imported image
      title: "Printing Service for Brochure",
      description:
        "High-quality printing for brochures to showcase your business effectively.",
    },
    {
      image: service2, // Directly use the imported image
      title: "Catalogues",
      description:
        "Custom catalogues designed to present your products and services in style.",
    },
    {
      image: service3, // Directly use the imported image
      title: "Digital Printing",
      description:
        "Fast and efficient digital printing for all your business needs.",
    },
  ];

  useEffect(() => {
    // Animate the cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reset", // Animation resets when leaving viewport
          },
        }
      );
    });

    // Animate the headline
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%", // Trigger when it enters the viewport
          end: "top 50%",
          toggleActions: "play none none reset",
        },
      }
    );

    // Animate the paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%", // Trigger when it enters the viewport
          end: "top 50%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const handleViewMore = () => {
    history.push("/products");
  };

  return (
    <Box sx={{ padding: { xs: 5, md: 0 }, textAlign: "center" }}>
      {/* Adjust padding here */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          paddingTop: 0,
          fontFamily: "Macondo",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#0077b6",
        }} // Padding for heading
        ref={headlineRef} // Add the ref to the headline
      >
        Our Services
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: 4 }}
        ref={paragraphRef} // Add the ref to the paragraph
      >
        Explore our diverse range of products tailored to meet your needs.
      </Typography>
      <Grid container spacing={4}>
        {/* Adjust grid spacing here */}
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" marginTop={4}>
        {/* Adjust margin here */}
        <Button
          variant="contained"
          sx={{ marginBottom: 4 }}
          color="primary"
          onClick={handleViewMore}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default OurServices;
