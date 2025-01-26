import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        transform: "scale(1)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" }, // Zoom effect on hover
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          {" "}
          {/* Adjust font size here */}
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          {" "}
          {/* Adjust font size here */}
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
