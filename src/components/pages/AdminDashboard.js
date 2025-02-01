import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const AdminDashboard = () => {
  const history = useHistory();
  const handleLogout = async () => {
    console.log("clicking");
    try {
      const response = await fetch("http://localhost:4000/auth/logout", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        history.push("/"); // Navigate to home page after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh", // Ensures the background color covers the full screen height
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 4,
          fontWeight: 600,
          color: "#0077b6",
          fontFamily: "Macondo",
        }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Books Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s",
              height: 200, // Fixed height
              width: "100%", // Full width of the container
              "&:hover": {
                transform: "scale(1.05)",
              },
              display: "flex",
              justifyContent: "center", // Center the content
              alignItems: "center", // Center the button
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#2196f3",
                  textAlign: "center",
                }}
              >
                Books
              </Typography>
              <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
                Manage and view available books in the library.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Link
                  to="/AdminBooks"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%", backgroundColor: "#2196f3" }}
                  >
                    View
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* News Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s",
              height: 200, // Fixed height
              width: "100%", // Full width of the container
              "&:hover": {
                transform: "scale(1.05)",
              },
              display: "flex",
              justifyContent: "center", // Center the content
              alignItems: "center", // Center the button
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#2196f3",
                  textAlign: "center",
                }}
              >
                News
              </Typography>
              <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
                Add and manage the latest news articles.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Link
                  to="/AdminAllNews"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ width: "100%", backgroundColor: "#2196f3" }}
                  >
                    View
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Services Card */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s",
              height: 200, // Fixed height
              width: "100%", // Full width of the container
              "&:hover": {
                transform: "scale(1.05)",
              },
              display: "flex",
              justifyContent: "center", // Center the content
              alignItems: "center", // Center the button
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#2196f3",
                  textAlign: "center",
                }}
              >
                Services
              </Typography>
              <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
                Manage available services offered by the platform.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Link
                  to="/AdminProducts"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ width: "100%", backgroundColor: "#2196f3" }}
                  >
                    View
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Button at the Bottom of the Page */}
      {/* Buttons in the same row */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: 4 }}
      >
        <Link to="/AddContent" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "#2196f3" }}
          >
            Add New Content
          </Button>
        </Link>

        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{ backgroundColor: "red" }}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
};

export default AdminDashboard;
