import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { motion, useInView, useAnimation } from "framer-motion";
import { section5About } from "@/config/content";
import Title from "../Title";

const { title, content, content1, img } = section5About;
const About = () => {
  const theme = useTheme();
  return (
    <Box
      left="0"
      width="100vw"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Title
              variant={{ xs: "h3", md: "h2" }}
              sx={{ mb: { xs: 3, md: 4 } }}
              align="center"
            >
              {title}
            </Title>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Typography variant="h6" lineHeight="1.6" sx={{ opacity: ".3" , color: "warm1.main"}}>
              {content}
            </Typography>
            <br />
            <Typography
              variant="h6"
              lineHeight="1.6"
              textAlign={""}
              sx={{ opacity: ".3", color: "warm1.main" }}
            >
              {content1}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                // background: `url(${img}) center / cover`,
                // minHeight: { xs: 500, sm: 500, md: 600, lg: 250 },
                // minWidth: { lg: 300 },
              }}
            >
              <img
                src={img}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "0.6rem",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
