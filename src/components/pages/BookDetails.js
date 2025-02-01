import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

const BookDetails = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/book/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response structure
        setBook(data.content); // Access 'content' field if that's how the data is structured
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Loading book details...
        </Typography>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <Typography variant="h6" color="error">
          Book not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        minHeight: "100vh", // Ensures it takes full viewport height
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 3,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 900,
          width: "100%",
          background: "#ffffff",
          minHeight: 500, // Allows enough space but is flexible
          overflow: "auto", // Prevents content clipping
        }}
      >
        {/* Left side - Book Image */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: 350, md: "100%" },
            objectFit: "cover",
            borderRadius: { md: "8px 0 0 8px" },
          }}
          image={book.image || "default_image_url"} // Replace with actual default image URL
          alt={book.title}
        />

        {/* Right side - Book Details */}
        <CardContent
          sx={{
            flex: 1,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            {book.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {book.description}
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="primary">
            ₹ {book.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookDetails;
