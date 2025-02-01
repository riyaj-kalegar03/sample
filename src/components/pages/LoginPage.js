import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useHistory } from "react-router-dom"; // Import useHistory

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in localStorage (you can use sessionStorage or a context for more advanced state management)
        localStorage.setItem("token", data.token);

        // Redirect to the admin dashboard after successful login
        alert("Login successful!");
        history.push("/AdminDashboard"); // Redirect to the admin dashboard
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", sm: 400 }, // Max width of 90% on small screens and 400px on larger screens
        margin: "auto",
        padding: 3,
        marginTop: { xs: "3rem", md: "5rem" }, // Smaller margin-top for smaller screens
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{ marginBottom: 2 }}
      >
        Login
      </Button>
      <Typography variant="body2" align="center">
        Don't have an account?{" "}
        <Link href="#/Register" sx={{ cursor: "pointer" }}>
          Register here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
