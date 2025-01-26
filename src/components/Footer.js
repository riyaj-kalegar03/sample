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
  backgroundColor: "#1b263b",
  color: "white",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 4),
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    marginBottom: 0,
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginBottom: theme.spacing(2),
  color: "#FFC107",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const FooterSocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
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
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="/products">Services</FooterLink>

            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterSection>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection>
            <FooterTitle variant="h6">Contact</FooterTitle>
            <Typography variant="body2">
              Email: kriyaprakashana@gmail.com
            </Typography>
            <Typography variant="body2">Phone: +91 7947128555</Typography>
            <Typography variant="body2">
              Address: 12, Thanappa Garden, 18th Cross, Sampangiramanagar,
              Sampangiramanagar, Bengaluru, Karnataka 560027
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
      <Divider sx={{ margin: "20px 0", borderColor: "white" }} />

      {/* Copyright Section */}
      <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <Typography variant="body2" sx={{ color: "#ffffff" }}>
          © 2025 My Company. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
