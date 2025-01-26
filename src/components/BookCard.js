import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const BookCard = ({ image, title, description }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 180, // Set a smaller width
        padding: 1.5, // Less padding for a compact look
        boxShadow: "none", // Remove box shadow for a flat look
        borderRadius: 1, // Rounded corners
        transition: "all 0.3s",
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom on hover for interaction
        },
        // Adjust padding for small screens
        "@media (max-width: 600px)": {
          paddingLeft: 0, // Remove left padding for small screens
        },
      }}
    >
      {/* Book Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 120, // Smaller image height
          objectFit: "cover",
          borderRadius: 1,
        }}
      />
      <Box sx={{ paddingTop: 1 }}>
        {/* Book Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
            fontSize: "1rem", // Smaller font size for the title
          }}
        >
          {title}
        </Typography>
        {/* Book Description */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            fontSize: "0.875rem", // Smaller font size for description
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BookCard;
