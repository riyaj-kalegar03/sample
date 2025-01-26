import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../ProductCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import images
import B1 from "../Broacher.jpeg";
import B2 from "../catelog.jpg";
import B3 from "../digital printing.avif";
import B4 from "../flex print.jpeg";
import B5 from "../envlope.jpeg";
import B6 from "../letter head.jpeg";
import B7 from "../offset.png";
import B8 from "../pamplates.jpeg";
import B9 from "../screen print.jpeg";
import B10 from "../visiting card.jpeg";
import B11 from "../voacher.jpeg";

gsap.registerPlugin(ScrollTrigger);

const productData = [
  {
    image: B1,
    title: "Printing Service for Brochure",
    description: "High-quality printing for brochures",
  },
  {
    image: B2,
    title: "Catalogues",
    description: "Custom catalogues for your business",
  },
  {
    image: B3,
    title: "Digital Printing",
    description: "Fast and efficient digital printing",
  },
  {
    image: B4,
    title: "Flex Printing",
    description: "Durable and vibrant flex printing",
  },
  {
    image: B5,
    title: "Envelope Printers",
    description: "Personalized envelope printing services",
  },
  {
    image: B6,
    title: "Letter Head Printers",
    description: "High-quality letterhead printing",
  },
  {
    image: B7,
    title: "Offset Printings",
    description: "Precision in offset printing",
  },
  {
    image: B8,
    title: "Pamphlets",
    description: "Custom pamphlets for your needs",
  },
  {
    image: B9,
    title: "Screen Printings",
    description: "Excellent screen printing services",
  },
  {
    image: B10,
    title: "Visiting Card Printers",
    description: "Unique visiting card printing",
  },
  {
    image: B11,
    title: "Voucher Printers",
    description: "Custom vouchers for promotions",
  },
];

const ProductPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-cards",
          start: "top 80%",
          toggleActions: "play none none reset", // Ensures it plays when entering and resets when leaving
        },
      }
    );
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      {/* Headline */}
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "2rem", fontWeight: "bold", fontFamily: "Macondo" }}
      >
        Explore Our Printing Services
      </Typography>

      {/* Product Cards */}
      <Grid
        container
        spacing={4}
        className="product-cards"
        justifyContent="center"
      >
        {productData.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} // Display 3 cards per row on medium screens and above
            key={index}
            className="product-card"
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              sx={{
                width: 300, // Fixed width
                height: 400, // Fixed height
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
