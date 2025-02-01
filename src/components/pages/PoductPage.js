import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:4000/service/")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data); // Set the fetched data to the state
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        setError("Failed to fetch product data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      {/* Headline */}
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "2rem", color: "#0077b6", fontFamily: "Macondo" }}
      >
        Explore Our Printing Services
      </Typography>

      {/* Product Cards */}
      <Grid container spacing={4} justifyContent="center">
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                sx={{ width: 300, height: 400 }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
