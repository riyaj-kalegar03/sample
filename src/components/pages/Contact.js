import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { gsap } from "gsap";

const Contact = () => {
  const containerRef = useRef(null); // Reference for the whole container

  useEffect(() => {
    const isResponsive = window.innerWidth < 768; // Detect responsive screen size (e.g., < 768px)

    if (isResponsive) {
      // Animate the whole container from the left
      gsap.from(containerRef.current, {
        x: "-100%", // Start from off-screen to the left
        opacity: 0, // Start with opacity 0
        duration: 1.2, // Animation duration
        ease: "power3.out", // Smooth easing
      });
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Container
        ref={containerRef} // Attach GSAP animation reference
        maxWidth="lg"
        sx={{
          boxShadow: 4,
          backgroundColor: "#fff",
          borderRadius: 3,
          paddingLeft: "46px",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4}>
          {/* Left Side - Contact Info */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: "#0077b6",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 2, fontFamily: "Macondo" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We'd love to hear from you! Reach out to us using the form or the
              details below.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Email:</strong> kriyaprakashana@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Phone:</strong> +91 7947128555
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> Suri Bhavan no.40/5, 16th cross, 2nd B
              main, SR Nagar, Bangalore, Karnataka 560027
            </Typography>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", maxWidth: "400px" }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", mb: 2, mt: 2 }}
              >
                Get in Touch
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                  required
                />
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#0077b6",
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#005f8d",
                      boxShadow: 4,
                    },
                  }}
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
