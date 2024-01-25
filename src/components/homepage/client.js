import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import styles from "./client.module.css";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { listClient } from "@/config/content";
import Title from "../Title";

const { logo, title } = listClient;
const OurClient = () => {
  const theme = useTheme();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed
  });

  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered]);

  return (
    <div ref={ref}>
      <Box
        left="0"
        width="100vw"
        sx={{
          py: 4,
        }}
      >
        {" "}
        <Container sx={{ my: { xs: 1, md: 2, lg: 2 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={styles.slideDownContainer}>
                <Title
                  textAlign={"center"}
                  variant={{ xs: "h3", md: "h2" }}
                  sx={{ mb: { xs: 2, md: 4 } }}
                  className={`${styles.slideDownText} ${
                    animationTriggered ? styles.animate : ""
                  }`}
                >
                  {title}
                </Title>
              </Box>
            </Grid>
            <Grid
              container
              rowSpacing={3}
              spacing={3}
              sx={{
                mb: 1,
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {logo.map((image) => (
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      "&:hover": { filter: "contrast(40%)" },
                    }}
                  >
                    <img
                      src={image.img}
                      style={{ maxHeight: "60px", objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
              ))}

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  left: 0,
                  height: 80,
                  // background: "linear-gradient(180deg, #06070a85, #06070a)",
                }}
              />
            </Grid>
            {/* {logo.map((image, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Box
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    alignItems: "center",
                    transition: "box-shadow 0.3s",
                    // background:"f5f5f5",
                    // "&:hover": {
                    //   boxShadow: `0 0 10px ${theme.palette.primary.main}`, // Add box shadow on hover
                    // },

                    // Set elevation for consistent shadow
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add initial box shadow or use elevation property
                    "&.MuiPaper-elevation1": {
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                    "&.MuiPaper-elevation2": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    },
                    // ... Add more elevation levels if needed
                  }}
                >
                  <Image
                    src={image.img}
                    alt={image.title}
                    layout="fill"
                    objectFit="contain"
                    borderRadius="5"
                  />
                </Box>
                <Typography variant="h6" sx={{}} align="center" gutterBottom>
                  {image.title}
                </Typography>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default OurClient;
