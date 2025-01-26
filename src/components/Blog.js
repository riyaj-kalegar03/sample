import React, { useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const blogData = [
    {
      title: "New Digital Printing Service Now Available!",
      text: "We are excited to announce the launch of our new digital printing service. This cutting-edge technology allows for quicker, more efficient print jobs with high-quality results. Whether you're looking to print brochures, flyers, or business cards, our digital printing service offers fast turnaround times and exceptional color accuracy.",
      author: "John Doe, Marketing Manager",
      tag: "service",
    },
    {
      title: "Exclusive Offer on Bulk Printing Orders!",
      text: "For a limited time, we are offering a special discount on bulk printing orders. Get up to 30% off when you order large quantities of brochures, business cards, or other printed materials. Contact us today to get your personalized quote and take advantage of this exclusive offer.",
      author: "Jane Smith, Sales Executive",
      tag: "offer",
    },
    {
      title: "Sustainability in Our Printing Process",
      text: "At [Printing Press Name], we are committed to sustainability. Our new eco-friendly printing methods use recycled paper and environmentally safe inks. By choosing our sustainable printing solutions, you help reduce environmental impact while getting the same high-quality results.",
      author: "Mark Williams, Operations Director",
      tag: "sustainability",
    },
    {
      title: "We're Expanding Our Services: Custom Packaging Now Available!",
      text: "We are pleased to introduce custom packaging services to our offerings. Whether you're a small business or a large corporation, we can help you design and print unique packaging solutions tailored to your products. Contact our team to learn more about our packaging options and get a free design consultation.",
      author: "Sarah Johnson, Creative Director",
      tag: "service",
    },
    {
      title: "Holiday Special: Free Shipping on All Print Orders!",
      text: "To celebrate the holiday season, we are offering free shipping on all print orders made before December 31st. Don't miss out on this limited-time offer to save on shipping costs while getting top-quality printed materials for your business or personal needs.",
      author: "Emily Clark, Customer Service Manager",
      tag: "offer",
    },
    {
      title: "Meet Our New Printing Press Machine!",
      text: "We’ve just upgraded our equipment with the latest printing press machine, allowing us to offer even higher-quality prints with faster turnaround times. Our state-of-the-art machinery can handle even the most complex print jobs with precision and efficiency. Come in and see the difference in quality!",
      author: "Chris Davis, Production Manager",
      tag: "news",
    },
  ];

  useEffect(() => {
    // Animation for "Our Latest News" (bottom to top)
    gsap.fromTo(
      ".headline",
      { y: 50, opacity: 0 }, // Start below the visible area
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".headline",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Animation for "Explore our latest services..." paragraph (bottom to top)
    gsap.fromTo(
      ".paragraph",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Animation for each blog item (bottom to top)
    gsap.utils.toArray(".blog-item").forEach((item) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box id="blog" sx={{ width: "100%", pt: 2, px: 4 }}>
      <Box sx={{ backgroundColor: "#fff", py: 5 }}>
        <Box className="container">
          <Box sx={{ mb: 4, textAlign: "center" }}>
            {/* Headline */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#0077b6", fontFamily: "Macondo" }}
              className="headline"
            >
              Our Latest News
            </Typography>
            {/* Paragraph */}
            <Typography
              variant="body1"
              className="paragraph"
              sx={{ marginTop: 2 }}
            >
              Stay updated with the latest news, offers, and updates from our
              printing press company.
              <br />
              Explore our latest services, discounts, and product launches.
            </Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            {blogData.map((blog, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  className="blog-item"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    boxShadow: 3,
                    padding: 2,
                    textAlign: "left",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "background-color 0.3s ease", // Smooth background color transition
                    "&:hover": {
                      backgroundColor: "lightblue", // Change background color on hover
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="#0077b6">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ py: 1 }}>
                    {blog.text}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {blog.author}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "#0077b6",
                        display: "inline-block",
                        padding: "4px 8px",
                        borderRadius: 1,
                        color: "#fff",
                      }}
                    >
                      {blog.tag}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", my: 4 }}>
            <Button variant="contained" onClick={() => alert("No more news!")}>
              Load More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
