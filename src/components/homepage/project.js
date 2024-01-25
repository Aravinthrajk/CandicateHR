import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { section4Project } from "@/config/content";
import Title from "../Title";
import Image from "next/image";

const { title, ourproject, top, bottom } = section4Project;
const Project = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const theme = useTheme();

  return (
    <Box left="0" width="100vw" sx={{ mt: { xs: 4, md: 6, lg: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              <Title
                variant={{ xs: "h3", md: "h2" }}
                align="center"
                className={styles.slideDownText}
                sx={{ mb: { xs: 3, md: 4 } }}
              >
                {title}
              </Title>
            </motion.div> */}
          </Grid>
          {/* {ourproject.map((field, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 3, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                <Title
                  variant={{ xs: "h6", md: "h4" }}
                  sx={{
                    color: "warm.main",
                    justifyContent: "center",
                    alignItems: "center", display: "flex",textAlign:"center"
                  }}
                >
                  {field.title}
                </Title>
                <Box
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    position: "relative",
                    background: field.imageUrl,
                    minHeight: { xs: 300, sm: 450, md: 400, lg: 400 },
                    minWidth: { lg: 300 },
                    display: "flex" ,
                    flexDirection: "column" ,
                    justifyContent: "flex-end" ,
                    alignItems: "center",
                    transition: "box-shadow 0.3s",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      boxShadow: `0 0 30px ${theme.palette.primary.main}`, 
                    },
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    "&.MuiPaper-elevation1": {
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                    "&.MuiPaper-elevation2": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      // height: { xs: 500, sm: 500, md: 600, lg: 789 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      minHeight: { xs: "25%", sm: "25%", md: "25%", lg: 150 },
                      backgroundColor: "rgba(0, 0, 0, 0.82)",
                    }}
                  >
                    <Stack direction={"column"}>
                      <Typography variant="h5" sx={{ color: "warm.main" }}>
                        {field.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "warm.main" }}
                      >
                        {field.descrption}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))} */}
        </Grid>
      </Container>
      <Box
        left="0"
        width="100vw"
        sx={{
          py: 5,
        }}
      >
        {" "}
        <Container>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h3"
                textAlign={"center"}
                component={motion.div}
                className="text"
                ref={ref}
              >
                {title}
              </Typography>
            </Grid>

            <Grid
              container
              spacing={10}
              flexWrap="wrap-reverse"
              alignItems="center"
              sx={{ mt: 0.1 }}
            >
              <Grid item xs={12} md={6}>
              <div data-aos="fade-up">
                <Box >
                  <Image
                    src={top.image}
                    alt={top.title}
                    width={500} // Set the width in pixels
                    height={300} // Set the height in pixels
                    layout="responsive" // or "fixed" or "fill" based on your requirements
                  />
                </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title
                    variant={{ xs: "h5", md: "h4" }}
                    sx={{ opacity: ".6" }}
                  >
                    {top.title}
                  </Title>

                  <Typography
                    variant="h6"
                    color="warm.main"
                    sx={{ pb: 2, opacity: ".3" }}
                  >
                    {top.subtitle}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={10}
              flexWrap="wrap-reverse"
              alignItems="center"
              sx={{ mt: { xs: 5, md: 4 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title
                    variant={{ xs: "h5", md: "h4" }}
                    sx={{ opacity: ".6" }}
                  >
                    {bottom.title}
                  </Title>

                  <Typography
                    variant="h6"
                    color="warm.main"
                    sx={{ opacity: ".3", pb: 2 }}
                  >
                    {bottom.subtitle}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={bottom.image}
                  alt={bottom.title}
                  width={500} // Set the width in pixels
                  height={300} // Set the height in pixels
                  layout="responsive"
                  style={{
                    // objectFit: "contain",
                    borderRadius: "0.6rem",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              flexWrap="wrap-reverse"
              alignItems="center"
              sx={{ mt: 0.1 }}
            >
              <Grid item xs={12} md={6}>
                <Box>
                  <Image
                    src={bottom.image}
                    alt={bottom.title}
                    width={500} // Set the width in pixels
                    height={300} // Set the height in pixels
                    layout="responsive"
                    style={{
                      // objectFit: "contain",
                      borderRadius: "0.6rem",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title
                    variant={{ xs: "h5", md: "h4" }}
                    sx={{ opacity: ".6" }}
                  >
                    {top.title}
                  </Title>

                  <Typography
                    variant="h6"
                    color="warm.main"
                    sx={{ opacity: ".3", pb: 2 }}
                  >
                    {top.subtitle}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={10}
              flexWrap="wrap-reverse"
              alignItems="center"
              sx={{ mt: { xs: 5, md: 4 } }}
            >
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title
                    variant={{ xs: "h5", md: "h4" }}
                    sx={{ opacity: ".6" }}
                  >
                    {bottom.title}
                  </Title>

                  <Typography
                    variant="h6"
                    color="warm.main"
                    sx={{ opacity: ".3", pb: 2 }}
                  >
                    {bottom.subtitle}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={bottom.image}
                  alt={bottom.title}
                  width={500} // Set the width in pixels
                  height={300} // Set the height in pixels
                  layout="responsive"
                  //  style={{
                  //    // objectFit: "contain",
                  //    borderRadius: "0.6rem",
                  //  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Project;
