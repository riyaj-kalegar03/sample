import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

export default function AdminBlog() {
  const [blogData, setBlogData] = useState([]);
  const history = useHistory(); // Use useHistory from React Router v5

  // Fetch blog data from the backend
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:4000/news");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  // Function to handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(`http://localhost:4000/news/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Blog deleted successfully!");
        setBlogData(blogData.filter((blog) => blog._id !== id));
      } else {
        alert("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("An error occurred while deleting the blog.");
    }
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Box id="admin-blog" sx={{ width: "100%", pt: 2, px: 4 }}>
      <Box sx={{ backgroundColor: "#fff", py: 5 }}>
        <Box className="container">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#0077b6", fontFamily: "Macondo" }}
            >
              Manage All News
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {blogData.map((blog, index) => (
              <Grid item xs={12} sm={4} key={index}>
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
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "lightblue",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="#0077b6">
                    {blog.headline}
                  </Typography>
                  <Typography variant="body2" sx={{ py: 1 }}>
                    {blog.content}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {blog.author}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "black",

                        display: "outline",
                        padding: "4px 8px",
                        borderRadius: 1,
                      }}
                    >
                      {formatDate(blog.createdAt)}
                    </Typography>
                  </Box>
                  {/* Action Buttons */}
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        history.push(`/UpdateContent/news/${blog._id}`)
                      }
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
