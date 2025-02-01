import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const BookCard = ({ image, title, description, price }) => {
  return (
    <Card
      sx={{
        width: { xs: 170, md: 180 }, // Fixed width
        height: 300, // Fixed height
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 1.5,
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Content Section */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "700" }}>
          {title}
        </Typography>

        {/* Scrollable Description (Hides Scrollbar) */}
        <Box
          sx={{
            maxHeight: 50, // Fixed height for text
            // Enable scrolling
            textAlign: "center",
            paddingX: 1,
            fontSize: "0.85rem",
            fontWeight: "none",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {description}
        </Box>

        <Typography variant="body1" color="primary">
          Rs. {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
