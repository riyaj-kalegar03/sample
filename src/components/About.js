import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import aboutUsImage from "./About us.webp";
import secondImage from "./flex print.jpeg";
import thirdImage from "./digital printing.avif";

const About = () => {
  const history = useHistory();

  const navigateToAbout = () => {
    history.push("/About");
  };

  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        {/* Left Side - Text */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Box p={{ xs: 3, sm: 4, md: 6 }} textAlign="center">
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
                  fontSize: { xs: "1.5rem", sm: "3rem", md: "2.5rem" },
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
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  color: "#0077b6",
                  cursor: "pointer",
                  display: "inline",
                  textDecoration: "none",
                }}
                onClick={navigateToAbout}
              >
                Learn More →
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side - Images */}
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              gap: 2,
            }}
          >
            {/* First (Larger) Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
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
            </motion.div>

            {/* Second (Smaller) Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                flex: "1 1 calc(50% - 10px)",
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
            </motion.div>

            {/* Third (Smaller) Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                flex: "1 1 calc(50% - 10px)",
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
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
