import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BookCard from "../BookCard"; // Ensure BookCard is correctly imported

const UserBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch all books from the backend using the fetch API
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/book/"); // Replace with your actual API endpoint
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "#f9f9f9",
        overflowX: "auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "primary.main",
          marginBottom: 2,
          fontFamily: "Macondo",
        }}
      >
        All Books
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: 4, color: "#555" }}
      >
        Browse through all available books.
      </Typography>

      <Grid
        container
        spacing={2} // Reduced spacing to fit 5 cards
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {books.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ width: "100%" }}>
            No books available.
          </Typography>
        ) : (
          books.slice(0, 10).map((book) => (
            <Grid
              item
              xs={6} // 2 per row on mobile
              sm={4} // 3 per row on tablets
              md={3} // 4 per row on medium screens
              lg={2.4} // 5 per row on large screens
              key={book._id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link to={`/Book/${book._id}`} style={{ textDecoration: "none" }}>
                {" "}
                {/* Link to book details */}
                <BookCard
                  image={book.image}
                  title={book.title}
                  price={book.price}
                  description={
                    book.description.split(" ").slice(0, 7).join(" ") +
                    (book.description.split(" ").length > 7 ? "..." : "")
                  }
                />
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default UserBooks;
