import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import BookCard from "./BookCard";
import { useHistory, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Books = () => {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/book/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.slice(0, 6));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleExploreMore = () => {
    history.push("/AllBooks");
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "#f9f9f9",
        position: "relative",

        zIndex: 1,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#0077b6",
            fontFamily: "Macondo",
            marginBottom: 3,
          }}
        >
          Featured Books
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            marginBottom: 5,
            color: "#555",
            fontSize: "1.2rem",
            lineHeight: "1.6",
            fontWeight: "300",
          }}
        >
          Discover a selection of captivating books that will inspire and
          engage. Find your next favorite read here!
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          overflowX: { xs: "auto" },
          flexWrap: { xs: "nowrap", md: "nowrap" },
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: { md: "center" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          gap: 1,

          paddingBottom: { xs: 2, md: 0 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
          >
            <Box
              sx={{
                flex: "0 0 auto",
                scrollSnapAlign: "center",
                width: { xs: "80%", sm: "60%", md: "30%" },
                maxWidth: "200px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Link to={`/Book/${book._id}`} style={{ textDecoration: "none" }}>
                <BookCard
                  image={book.image}
                  title={book.title}
                  description={
                    book.description.split(" ").slice(0, 4).join(" ") +
                    (book.description.split(" ").length > 4 ? "..." : "")
                  }
                  price={book.price}
                />
              </Link>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box textAlign="center" marginTop={5}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Button
            variant="contained"
            sx={{
              marginBottom: 4,
              backgroundColor: "#0077b6",
              "&:hover": {
                backgroundColor: "#0077b6",
              },
              borderRadius: "5px",
              padding: "10px 30px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handleExploreMore}
          >
            Explore More
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Books;
