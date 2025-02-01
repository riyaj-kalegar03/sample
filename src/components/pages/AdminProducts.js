import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, CircularProgress, Button } from "@mui/material";
import ProductCard from "../ProductCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useHistory } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AdminProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchProducts();

    // GSAP animation
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
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  // Fetch products from backend
  const fetchProducts = () => {
    fetch("http://localhost:4000/service/")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch product data");
        setLoading(false);
      });
  };

  // Handle Update
  const handleUpdate = (id) => {
    const updatedProduct = {
      title: "Updated Product Name", // Example update, modify as needed
    };

    fetch(`http://localhost:4000/service/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Updated product ${id}:`, data);
        fetchProducts(); // Refresh data after update
      })
      .catch((err) => console.error("Error updating product:", err));
  };

  // Handle Delete
  const handleDelete = (id) => {
    // Function to delete product after confirmation
    const deleteProduct = async () => {
      try {
        await fetch(`http://localhost:4000/service/${id}`, {
          method: "DELETE",
        });
        setProductData((prevData) =>
          prevData.filter((product) => product._id !== id)
        ); // Remove deleted product
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

    // Ask for confirmation before deleting
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct();
    }
  };

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
            md={4}
            lg={3} // 4 cards per row on large screens
            key={index}
            className="product-card"
          >
            {/* Card Wrapper */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "1rem",
                backgroundColor: "white",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "1rem",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={() =>
                    history.push(`/UpdateContent/service/${product._id}`)
                  }
                  sx={{
                    flex: 1,
                    backgroundColor: "#007BFF",
                    color: "white",
                    "&:hover": { backgroundColor: "#0056b3" },
                    marginRight: "0.5rem",
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDelete(product._id)}
                  sx={{
                    flex: 1,
                    backgroundColor: "#DC3545",
                    color: "white",
                    "&:hover": { backgroundColor: "#a71d2a" },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminProducts;
