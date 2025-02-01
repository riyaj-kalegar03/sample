import React, { useEffect, useState } from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const OurServices = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/service/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleViewMore = () => {
    history.push("/products");
  };

  return (
    <Box sx={{ padding: { xs: 5, md: 0 }, textAlign: "center" }}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: false }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Macondo",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#0077b6",
          }}
        >
          Our Services
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Explore our diverse range of products tailored to meet your needs.
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <ProductCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" marginTop={4}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Button
            variant="contained"
            sx={{ marginBottom: 4 }}
            color="primary"
            onClick={handleViewMore}
          >
            Explore More
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default OurServices;
