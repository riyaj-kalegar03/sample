import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import teamworkImage from "../About us.webp";
import innovationImage from "../flex print.jpeg";
import growthImage from "../digital printing.avif";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0077b6", fontFamily: "Macondo" }}
        >
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Learn more about our mission, vision, and the people who make it all
          happen.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#0077b6",
                  fontFamily: "Macondo",
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                For over 21 years, we have been at the forefront of the printing
                industry, offering services such as brochures, catalogs, digital
                and offset printing, Flex Printing, and more. From professional
                letterheads to striking visiting cards, we bring your ideas to
                life with precision and quality.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Driven by innovation and excellence, we are committed to
                delivering solutions that exceed expectations. As a trusted
                partner, we help businesses and individuals transform their
                visions into reality with creativity and reliability. Contact us
                to discover exceptional printing solutions tailored to your
                needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "2fr 1fr" }}
            gridTemplateRows={{ xs: "auto auto", sm: "1fr 1fr" }}
            gap={2}
          >
            <Card
              elevation={3}
              sx={{ gridColumn: "span 2", gridRow: "span 2" }}
            >
              <CardMedia
                component="img"
                image={teamworkImage}
                alt="Teamwork"
                sx={{ height: 300, width: "100%", objectFit: "cover" }}
              />
            </Card>
            <Card elevation={3}>
              <CardMedia
                component="img"
                image={innovationImage}
                alt="Innovation"
                sx={{ height: 150, objectFit: "cover" }}
              />
            </Card>
            <Card elevation={3}>
              <CardMedia
                component="img"
                image={growthImage}
                alt="Growth"
                sx={{ height: 150, objectFit: "cover" }}
              />
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Box mt={5} textAlign="center">
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0077b6", fontFamily: "Macondo" }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="sm"
          mx="auto"
        >
          To empower businesses and individuals with cutting-edge solutions that
          drive success and inspire growth. We strive to set new benchmarks in
          the industry through dedication and passion.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
