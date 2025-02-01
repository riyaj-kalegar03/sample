import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BookCard from "../BookCard"; // Make sure this component is similar to the one in your previous code

const AdminBooks = () => {
  const [books, setBooks] = useState([]);

  const history = useHistory();

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

  const handleDelete = (bookId) => {
    // Handle delete functionality (e.g., make a DELETE request to the backend)
    const deleteBook = async () => {
      try {
        await fetch(`http://localhost:4000/book/${bookId}`, {
          method: "DELETE",
        });
        setBooks(books.filter((book) => book._id !== bookId)); // Corrected the reference to the _id field
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    };

    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook();
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 }, // 2 units of padding for small screens, 4 for larger screens
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
        Browse through all available books, update or delete as needed.
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        {books.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ width: "100%" }}>
            No books available.
          </Typography>
        ) : (
          books.map((book, index) => (
            <Grid
              item
              xs={6} // 2 cards per row on small screens (mobile)
              sm={4} // 3 cards per row on medium screens (tablet)
              md={2} // 4 cards per row on large screens (laptop)
              key={book._id}
            >
              <BookCard
                image={book.image}
                title={book.title}
                price={book.price}
                description={
                  book.description.split(" ").slice(0, 7).join(" ") +
                  (book.description.split(" ").length > 7 ? "..." : "")
                }
              />
              <Box textAlign="center" sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    history.push(`/UpdateContent/book/${book._id}`)
                  }
                  sx={{
                    fontSize: "10px",
                    marginRight: 1, // Add gap between the buttons
                    backgroundColor: "#0077b6", // Blue border for Update button
                    color: "white", // Blue text color for Update button
                    "&:hover": {
                      borderColor: "darkblue",
                      color: "white",
                    },
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(book._id)}
                  sx={{
                    fontSize: "10px",
                    backgroundColor: "red", // Red border for Delete button
                    color: "white", // Red text color for Delete button
                    "&:hover": {
                      borderColor: "darkred",
                      color: "white",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default AdminBooks;
