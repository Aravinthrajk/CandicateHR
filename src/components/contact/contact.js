import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/system";
import Title from "../Title";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert("Form submitted successfully");
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Rest of your component code...

  return (
    <Box
      id="contact"
      left="0"
      width="100vw"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title
              variant={{ xs: "h4", md: "h3" }}
              sx={{
                color: "warm.main",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                textAlign: "center",
              }}
            >
              Contact Us
            </Title>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h4" sx={{ lineHeight: "2" }}>
              Kanvey Location
            </Typography>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.174924876025!2d78.70807467504329!3d10.874296489280486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf70ebec3267d%3A0xe281ec72d476f74c!2sKN%20Nest!5e0!3m2!1sen!2sin!4v1703827469344!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: "none", borderRadius: 15 }}
            ></iframe>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              "& .MuiTextField-root": { m: 1, color: "primary" },
            }}
          >
            <form onSubmit={handleSubmit}>
              <br /> <br />
              <TextField
                label="Name"
                variant="outlined"
                fullWidth color="primary" focused
                // sx={{ color: "blue" }}
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth color="primary" focused
                // sx={{ width: '45%' }}
                required
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth color="primary" focused
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth color="primary" focused
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ m: 1 }}
                color="secondary"
              >
                Send
              </Button>
            </form>{" "}
          </Grid>{" "}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
