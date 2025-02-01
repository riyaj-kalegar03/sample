import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useHistory } from "react-router-dom"; // Import useHistory

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page after successful registration
        alert("Registration successful! Redirecting to login...");
        history.push("/login");
      } else {
        setError(data.message || "Failed to register. Please try again.");
      }
    } catch (error) {
      setError("Failed to register. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", sm: 400 }, // 90% width on small screens and 400px on larger screens
        margin: "auto",
        marginTop: { xs: "3rem", md: "5rem" }, // Smaller margin-top for small screens
        padding: 3,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
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
        onClick={handleRegister}
        sx={{ marginBottom: 2 }}
      >
        Register
      </Button>
      <Typography variant="body2" align="center">
        Already have an account?{" "}
        <Link href="#/Login" sx={{ cursor: "pointer" }}>
          Login here
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
