import React from "react";
import { Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

// Styled Paper Component for enhanced visuals
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0B0C38",
  color: "white",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const springEffect = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

// Comment Component
const Comment = ({ quote, author }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <StyledPaper className="testimonial-card">
        <Typography
          variant="h4"
          style={{ color: "#FFC107", marginBottom: "16px" }}
        >
          &#8220;
        </Typography>
        <Typography
          variant="body1"
          style={{ flexGrow: 1, marginBottom: "16px" }}
        >
          {quote}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ color: "#FFC107", textAlign: "right", fontStyle: "italic" }}
        >
          {author}
        </Typography>
      </StyledPaper>
    </motion.div>
  );
};

// Main Testimonial Section Component
const TestimonialSection = () => {
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
    <Box textAlign="center" py={6} px={2} style={{ backgroundColor: "white" }}>
      <motion.div
        variants={springEffect}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Typography
          variant="h4"
          component="h2"
          style={{
            marginBottom: "16px",
            color: "#0077b6",
            fontFamily: "Macondo",
          }}
        >
          What They Say?
        </Typography>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Typography
          variant="body1"
          style={{
            marginBottom: "48px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Discover what our users have to say about their experiences with our
          platform. We're proud to make a difference!
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "1rem" }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Comment quote={testimonial.quote} author={testimonial.author} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
