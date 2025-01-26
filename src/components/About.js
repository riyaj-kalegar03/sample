import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import aboutUsImage from "./About us.webp"; // First image
import secondImage from "./flex print.jpeg"; // Second image
import thirdImage from "./digital printing.avif"; // Third image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-text",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".about-images",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        {/* About Us Text */}
        <Grid item xs={12} sm={6}>
          <Box
            className="about-text"
            p={{ xs: 3, sm: 4, md: 6 }}
            textAlign="center"
          >
            <Typography
              variant="h5"
              sx={{ color: "#0077b6", fontFamily: "Macondo" }}
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "black",
                fontSize: {
                  xs: "1.5rem",
                  sm: "3rem",
                  md: "2.5rem",
                },
              }}
              gutterBottom
            >
              Printing Solutions Tailored to Your Company
            </Typography>
            <Typography variant="body1" paragraph>
              We are a leading printing press company committed to delivering
              high-quality print solutions to our clients. Our team of skilled
              professionals ensures precision, innovation, and customer
              satisfaction at every stage of the printing process.
            </Typography>
          </Box>
        </Grid>

        {/* Three Images */}
        <Grid item xs={12} sm={6}>
          <Box
            className="about-images"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap" // Ensures proper layout on smaller screens
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              gap: 2,
            }}
          >
            {/* First Image (Larger) */}
            <Box
              sx={{
                flex: "1 1 100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <img
                src={aboutUsImage}
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
            {/* Second Image (Smaller) */}
            <Box
              sx={{
                flex: "1 1 calc(50% - 10px)", // Takes half of the row
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={secondImage}
                alt="Second Image"
                style={{
                  width: "100%",
                  maxWidth: "140px",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
            {/* Third Image (Smaller) */}
            <Box
              sx={{
                flex: "1 1 calc(50% - 10px)", // Takes half of the row
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={thirdImage}
                alt="Third Image"
                style={{
                  width: "100%",
                  maxWidth: "140px",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
