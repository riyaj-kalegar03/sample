import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(to right, #1b263b, #0f172a)",
  color: "white",
  padding: theme.spacing(8, 2),
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  borderTop: "1px solid #FFC107",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 4),
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.4rem",
  marginBottom: theme.spacing(3),
  color: "#FFC107",
  position: "relative",
  "&:after": {
    content: '""',
    display: "block",
    width: "50px",
    height: "2px",
    backgroundColor: "#FFC107",
    marginTop: "4px",
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1.5),
  fontSize: "0.9rem",
  lineHeight: "1.6",
  letterSpacing: "0.5px",
  "&:hover": {
    textDecoration: "underline",
    color: "#FFC107",
    transition: "color 0.3s ease",
  },
}));

const FooterSocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2.5),
  justifyContent: "center",
  marginTop: theme.spacing(3),
  "& .MuiIconButton-root": {
    transform: "scale(1)",
    transition: "transform 0.3s ease, color 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#FFC107",
    },
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={5}>
        {/* Company Info Section */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle variant="h6">Company</FooterTitle>
            <Typography variant="body2">KRIYA PRAKASHANA PVT LTD</Typography>
            <Typography variant="body2">All rights reserved</Typography>
          </FooterSection>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle variant="h6">Quick Links</FooterTitle>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="/About">About Us</FooterLink>
            <FooterLink href="/Contact">Contact Us</FooterLink>
            <FooterLink href="/products">Services</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterSection>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle variant="h6">Contact</FooterTitle>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Email: kriyaprakashana@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Phone: +91 7947128555
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Address: Suri Bhavan no.40/5, 16th cross, 2nd B main, SR Nagar,
              Bangalore, Karnataka 560027
            </Typography>
          </FooterSection>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle variant="h6">Follow Us</FooterTitle>
            <FooterSocialIcons>
              <IconButton color="inherit" href="https://www.facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://www.twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" href="https://www.instagram.com">
                <Instagram />
              </IconButton>
            </FooterSocialIcons>
          </FooterSection>
        </Grid>
      </Grid>

      {/* Horizontal Line */}
      <Divider
        sx={{
          margin: "20px 0",
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderStyle: "dashed",
        }}
      />

      {/* Copyright Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: 3,
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          animation: "fadeIn 1s ease-in",
        }}
      >
        <Typography variant="body2" sx={{ color: "#ffffff" }}>
          © 2025 My Company. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
