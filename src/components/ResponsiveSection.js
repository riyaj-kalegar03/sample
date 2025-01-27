import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHistory } from "react-router-dom"; // Import useHistory for routing

gsap.registerPlugin(ScrollTrigger);

const ResponsiveSection = () => {
  const sectionRef = useRef(null); // Reference to the section
  const history = useHistory(); // React Router history hook

  useEffect(() => {
    const element = sectionRef.current;

    // GSAP animation
    gsap.fromTo(
      element,
      { opacity: 0, y: 100 }, // Start state (invisible, positioned below)
      {
        opacity: 1,
        y: 0, // End state (visible, positioned in place)
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Trigger when the section is near the viewport
          end: "bottom 20%",
          toggleActions: "play none none reset", // Animation resets on scroll out
        },
      }
    );
  }, []);

  // Navigate to the Contact page
  const navigateToContact = () => {
    history.push("/Contact"); // Redirect to /Contact
  };

  return (
    <>
      <Box
        ref={sectionRef} // Attach ref to the top section
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: { xs: "50vh", sm: "60vh", md: "70vh" }, // Responsive height
          background: "#f9f9f9",
          color: "white",
          padding: "20px",
          clipPath: "ellipse(120% 90% at 50% 0%)", // Keeps the wavy top responsive
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#0077b6",
            fontFamily: "Aldrich",
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Responsive font sizes
          }}
        >
          <span style={{ color: "#0077b6" }}>KRIYA</span> PRAKASHANA PVT LTD
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 300,
            color: "black",
            mb: 4,
            fontFamily: "Macondo",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font sizes
          }}
        >
          Promises are just the beginning; we deliver greatness.
        </Typography>
        <Box textAlign="center" marginTop={4}>
          {/* Adjust margin here */}
          <Button
            variant="contained"
            sx={{ marginBottom: 4 }}
            color="primary"
            onClick={navigateToContact} // Navigate on click
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ResponsiveSection;
