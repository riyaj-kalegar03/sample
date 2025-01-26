import React, { useRef } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import Slider from "react-slick";
import "../App.css"; // Import your global styles
import vid1 from "../img/hero vid.mp4"; // Import your video

function HeroSection() {
  const aboutUsRef = useRef(null); // Create a ref for the About Us section

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Function to scroll to About Us section
  const handleScrollToAbout = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to About Us section
  };

  return (
    <Box
      className="carousel-container"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Slider {...settings}>
        {/* Single Video Slide */}
        <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
          <video
            src={vid1}
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
          />

          {/* Light Black Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.3)", // Light black gradient
              zIndex: "-1",
            }}
          />

          {/* Content Over the Video */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 1,
              width: "100%",
              padding: "0 20px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontFamily: "Aldrich",
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" }, // Responsive font size
              }}
            >
              KRIYA PRAKASHANA PVT LTD
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "300",
                fontFamily: "Macondo",
                marginBottom: "10px",
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // Responsive font size
              }}
            >
              Your Ideas. Our Expertise. Perfect Prints.
            </Typography>

            {/* Phone Number and Email */}
            <Box sx={{ marginTop: "5px" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "3px",
                }}
              >
                <Link
                  href="tel:+1234567890"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  +91 7947128555
                </Link>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <Link
                  href="mailto:info@kriyaprakashana.com"
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  kriyaprakashana@gmail.com
                </Link>
              </Typography>
            </Box>

            {/* Get Started Button */}
            <Box sx={{ marginTop: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "25px",
                  fontFamily: "Arial, sans-serif",
                }}
                onClick={handleScrollToAbout} // Scroll to About Us section when clicked
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Slider>

      {/* About Us Section */}
      <Box
        ref={aboutUsRef} // Attach the ref to the About Us section
      ></Box>
    </Box>
  );
}

export default HeroSection;
