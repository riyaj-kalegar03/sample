import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

const UpdateContent = () => {
  const { contentId, content } = useParams(); // Assuming the content ID is in the URL
  const [contentType, setContentType] = useState(content);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    headline: "",
    content: "",
    author: "",
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Fetch existing content for updating
  useEffect(() => {
    // Example of fetching content data by ID
    const apiUrl = `http://localhost:4000/${contentType}/${contentId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFormData(data.content); // Assuming data.content contains the content details
        } else {
          alert(data.message || "Failed to fetch content.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error fetching the content.");
      });
  }, [contentType, contentId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (contentType !== "news") {
      if (!formData.title) newErrors.title = "Title is required";
      if (!formData.description)
        newErrors.description = "Description is required";
    }
    if (contentType === "book" && !formData.price)
      newErrors.price = "Price is required";
    if (contentType === "news" && !formData.headline)
      newErrors.headline = "Headline is required";
    if (contentType === "news" && !formData.content)
      newErrors.content = "Content is required";
    if (contentType === "news" && !formData.author)
      newErrors.author = "Author is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validate()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("headline", formData.headline);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("author", formData.author);

    // For books and services, append other fields
    if (contentType === "book" || contentType === "service") {
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
    }

    if (contentType === "book") {
      formDataToSend.append("price", formData.price);
    }

    if (image) {
      formDataToSend.append("image", image);
    }

    let apiUrl = "";
    if (contentType === "book") {
      apiUrl = `http://localhost:4000/book/${contentId}`;
    } else if (contentType === "news") {
      apiUrl = `http://localhost:4000/news/${contentId}`;
    } else if (contentType === "service") {
      apiUrl = `http://localhost:4000/service/${contentId}`;
    }

    // Send the form data to the appropriate server endpoint
    fetch(apiUrl, {
      method: "PUT",
      body: formDataToSend, // Send FormData to backend
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(
            `${
              contentType.charAt(0).toUpperCase() + contentType.slice(1)
            } updated successfully!`
          );
          history.push("/AdminAllNews"); // Redirect to dashboard or another page
        } else {
          alert("Failed to update content.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error updating the content.");
      });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Update Content
      </Typography>

      {/* Select Content Type */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="content-type-label">Content Type</InputLabel>
        <Select
          labelId="content-type-label"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          label="Content Type"
        >
          <MenuItem value="book">Book</MenuItem>
          <MenuItem value="news">News</MenuItem>
          <MenuItem value="service">Service</MenuItem>
        </Select>
      </FormControl>

      {/* Conditionally Render Title Field (Only for Book and Service) */}
      {contentType !== "news" && (
        <TextField
          label="Title"
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
          sx={{ marginBottom: 2 }}
        />
      )}

      {/* Conditionally Render Description Field (Only for Book and Service) */}
      {contentType !== "news" && (
        <TextField
          label="Description"
          fullWidth
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
      )}

      {/* Conditionally Render Price Field (Only for Book) */}
      {contentType === "book" && (
        <TextField
          label="Price"
          fullWidth
          name="price"
          value={formData.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          type="number"
          sx={{ marginBottom: 2 }}
          InputProps={{
            startAdornment: "Rs.",
          }}
        />
      )}

      {/* News Fields (Only for News) */}
      {contentType === "news" && (
        <>
          <TextField
            label="Headline"
            fullWidth
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            error={!!errors.headline}
            helperText={errors.headline}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Content"
            fullWidth
            name="content"
            value={formData.content}
            onChange={handleChange}
            error={!!errors.content}
            helperText={errors.content}
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Author"
            fullWidth
            name="author"
            value={formData.author}
            onChange={handleChange}
            error={!!errors.author}
            helperText={errors.author}
            sx={{ marginBottom: 2 }}
          />
        </>
      )}

      {/* Image Upload for Books and Services */}
      {(contentType === "book" || contentType === "service") && (
        <Button variant="outlined" component="label" sx={{ marginBottom: 2 }}>
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
      )}

      {/* Submit Button */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "50%" }}
          onClick={handleSubmit}
        >
          Update {contentType.charAt(0).toUpperCase() + contentType.slice(1)}
        </Button>
      </Stack>
    </Box>
  );
};

export default UpdateContent;
