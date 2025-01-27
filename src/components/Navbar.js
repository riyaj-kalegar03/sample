import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#0077b6" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            Kriya Prakashana
          </Typography>
          {/* Hamburger Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Typography
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Typography>
            <Typography
              component={Link}
              to="/products"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Services
            </Typography>
            <Typography
              component={Link}
              to="/Contact"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Sidebar Links */}
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/about"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/products"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
