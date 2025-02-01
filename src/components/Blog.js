import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

// Motion Variants for Blog
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

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  const history = useHistory();
  const handleNavigate = () => {
    // Programmatically navigate to a new route
    history.push("/AllNews"); // This will navigate to '/AllNews'
  };

  useEffect(() => {
    // Fetch blog data from the backend
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:4000/news"); // API endpoint
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  // Function to format the date to show only the date part
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // This will return the date in "MM/DD/YYYY" format
  };

  return (
    <Box id="blog" sx={{ width: "100%", pt: 2, px: 4 }}>
      <Box sx={{ backgroundColor: "#fff", py: 5 }}>
        <Box className="container">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            {/* Apply Framer Motion for zoom-out spring animation */}
            <motion.div
              variants={springEffect}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {/* Headline */}
              <Typography
                variant="h4"
                sx={{ color: "#0077b6", fontFamily: "Macondo" }}
              >
                Our Latest News
              </Typography>
            </motion.div>
            {/* Apply Framer Motion for fade-in-up animation on paragraph */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Stay updated with the latest news, offers, and updates from our
                printing press company.
                <br />
                Explore our latest services, discounts, and product launches.
              </Typography>
            </motion.div>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {blogData.slice(0, 6).map((blog, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{ display: "flex" }}>
                {/* Apply Framer Motion for bottom-to-top animation on blog item */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  style={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      boxShadow: 3,
                      padding: 2,
                      textAlign: "left",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "background-color 0.3s ease", // Smooth background color transition
                      "&:hover": {
                        backgroundColor: "lightblue", // Change background color on hover
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" color="#0077b6">
                      {blog.headline}
                    </Typography>
                    <Typography variant="body2" sx={{ py: 1, flexGrow: 1 }}>
                      {blog.content}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {blog.author}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#0077b6",
                          display: "inline-block",
                          padding: "4px 8px",
                          borderRadius: 1,
                          color: "#fff",
                        }}
                      >
                        {formatDate(blog.createdAt)}{" "}
                        {/* Display the creation date */}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", my: 4 }}>
            {/* Apply Framer Motion for fade-in-up animation on the button */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Button variant="contained" onClick={handleNavigate}>
                Load More
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
