import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom"; // Import useHistory for routing
import { motion } from "framer-motion"; // Import Framer Motion

// Spring Animation Effect
const springEffect = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const ResponsiveSection = () => {
  const history = useHistory(); // React Router history hook

  // Navigate to the Contact page
  const navigateToContact = () => {
    history.push("/Contact"); // Redirect to /Contact
  };

  return (
    <motion.div
      variants={springEffect}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Ensures the animation triggers when in view
    >
      <Box
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
        <motion.div
          variants={springEffect}
          initial="hidden"
          whileInView="visible"
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
        </motion.div>

        <motion.div
          variants={springEffect}
          initial="hidden"
          whileInView="visible"
        >
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
        </motion.div>

        <motion.div
          variants={springEffect}
          initial="hidden"
          whileInView="visible"
        >
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
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ResponsiveSection;
