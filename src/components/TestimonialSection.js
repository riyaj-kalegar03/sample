import React, { useEffect, useRef } from "react";
import { Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Styled Paper Component for enhanced visuals
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0B0C38",
  color: "white",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
  transition: "transform 0.3s ease",
  minHeight: "220px", // Reduced minimum height for uniformity
  display: "flex", // Flexbox to align content
  flexDirection: "column", // Ensure vertical stacking
  justifyContent: "space-between", // Spread content evenly
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Comment Component
const Comment = ({ quote, author }) => {
  return (
    <StyledPaper>
      <Typography
        variant="h4"
        style={{ color: "#FFC107", marginBottom: "16px" }}
      >
        &#8220;
      </Typography>
      <Typography variant="body1" style={{ flexGrow: 1, marginBottom: "16px" }}>
        {quote}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ color: "#FFC107", textAlign: "right", fontStyle: "italic" }}
      >
        {author}
      </Typography>
    </StyledPaper>
  );
};

// Main Testimonial Section Component
const TestimonialSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      // Animate headline and paragraph every time they appear in view
      gsap.utils.toArray(".headline").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // Animate testimonial cards every time they appear in view
      gsap.utils.toArray(".testimonial-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  const testimonials = [
    {
      quote:
        "The platform has revolutionized the way I work. It's fast, efficient, and incredibly user-friendly.",
      author: "John Doe",
    },
    {
      quote:
        "I've been able to achieve my goals much quicker thanks to the amazing tools provided here.",
      author: "Jane Smith",
    },
    {
      quote:
        "Excellent customer service and an outstanding product. Highly recommend it to everyone!",
      author: "Emily Davis",
    },
  ];

  return (
    <Box
      ref={containerRef}
      textAlign="center"
      py={6}
      px={2}
      style={{ backgroundColor: "white" }}
    >
      <Typography
        className="headline"
        variant="h4"
        component="h2"
        style={{
          fontWeight: "bold",

          marginBottom: "16px",
          textTransform: "uppercase",
          color: "#0077b6",
          fontFamily: "Macondo",
        }}
      >
        What They Say?
      </Typography>
      <Typography
        className="headline"
        variant="body1"
        style={{
          marginBottom: "48px", // Increased margin to add more gap
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        Discover what our users have to say about their experiences with our
        platform. We're proud to make a difference!
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "1rem" }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="testimonial-card">
              <Comment quote={testimonial.quote} author={testimonial.author} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
