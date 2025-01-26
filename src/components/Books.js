import React, { useEffect, useRef } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import BookCard from "./BookCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import book1 from "./book1.webp"; // Replace with actual images
import book2 from "./book b4.jpg";
import book3 from "./book b1.jpeg";
import book4 from "./book b2.jpeg";
import book5 from "./book b3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Books = () => {
  const books = [
    {
      image: book1,
      title: "Book Title 1",
      description: "This is a short description of Book 1.",
    },
    {
      image: book2,
      title: "Book Title 2",
      description: "This is a short description of Book 2.",
    },
    {
      image: book3,
      title: "Book Title 3",
      description: "This is a short description of Book 3.",
    },
    {
      image: book4,
      title: "Book Title 4",
      description: "This is a short description of Book 4.",
    },
    {
      image: book5,
      title: "Book Title 5",
      description: "This is a short description of Book 3.",
    },
    {
      image: book4,
      title: "Book Title 6",
      description: "This is a short description of Book 4.",
    },
  ];

  const cardsRef = useRef([]);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const buttonRef = useRef(null); // Reference for the "Explore More" button

  useEffect(() => {
    // GSAP animation for each book card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Trigger when the card is near the viewport
            end: "top 50%", // Animation runs until the card reaches this point
            toggleActions: "play none none reverse", // Reverse animation on scroll back
          },
        }
      );
    });

    // GSAP animation for the headline (bottom to top)
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 }, // Start below the visible area
      {
        opacity: 1,
        y: 0, // End at the normal position
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%", // Trigger when the headline is near the viewport
          end: "top 50%", // Animation runs until the headline reaches this point
          toggleActions: "play none none reverse", // Reverse animation on scroll back
        },
      }
    );

    // GSAP animation for the subline (bottom to top)
    gsap.fromTo(
      sublineRef.current,
      { opacity: 0, y: 50 }, // Start below the visible area
      {
        opacity: 1,
        y: 0, // End at the normal position
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sublineRef.current,
          start: "top 85%", // Trigger when the subline is near the viewport
          end: "top 60%", // Animation runs until the subline reaches this point
          toggleActions: "play none none reverse", // Reverse animation on scroll back
        },
      }
    );

    // GSAP animation for the "Explore More" button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 }, // Start below the visible area
      {
        opacity: 1,
        y: 0, // End at the normal position
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%", // Trigger when the button is near the viewport
          end: "top 70%", // Animation runs until the button reaches this point
          toggleActions: "play none none reverse", // Reverse animation on scroll back
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up all ScrollTriggers
    };
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 }, // 2 units of padding for small screens, 4 for larger screens
        backgroundColor: "#f9f9f9",
        overflowX: "auto",
        position: "relative", // To prevent any overflow issues
        zIndex: 1, // Ensure the section content doesn't overlap with other sections
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
        ref={headlineRef} // Add the ref to the headline
      >
        Featured Books
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ marginBottom: 4, color: "#555" }}
        ref={sublineRef} // Add the ref to the subline
      >
        Discover a selection of captivating books that will inspire and engage.
        Find your next favorite read here!
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          overflow: "hidden", // To prevent unwanted scroll behavior inside the grid
        }}
      >
        {books.map((book, index) => (
          <Grid
            item
            xs={6} // 2 cards per row on small screens (mobile)
            sm={4} // 3 cards per row on medium screens (tablet)
            md={2} // 4 cards per row on large screens (laptop)
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Attach refs to each card
          >
            <BookCard
              image={book.image}
              title={book.title}
              description={book.description}
            />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" marginTop={4}>
        {/* Adjust margin here */}
        <Button
          variant="contained"
          sx={{ marginBottom: 4 }}
          color="primary"
          onClick={() => alert("No more books available!")}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default Books;
