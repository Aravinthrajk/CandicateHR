import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { slideInFromTop } from "../../config/motion";
import { section1Content } from "@/config/content";
import Title from "../Title";
import LaunchButton from "../Buttons/LaunchButton";
import Image from "next/image";

const { MainBG, bg, title, main, subtitle } = section1Content;
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};
const HeroPage = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      // sx={{
      //   backgroundImage: `url(${MainBG})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <Box
        position="absolute"
        left={0}
        width="100%"
        height="100%"
        // bgcolor="rgba(0, 0, 0, 0.5 )"
        display="flex"
        alignItems="center"
        justifyContent="left"
        // paddingLeft={4}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={12} lg={8}>
              <div data-aos="fade-right">
                <Box
                  textAlign="left"
                  display="grid"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left",
                  }}
                >
                  <Stack
                    sx={{ height: "100%" }}
                    justifyContent="center"
                    direction="column"
                    spacing={2}
                  >
                    <Title
                      variant={{ xs: "h4", sm: "h3", md: "h2" }}
                      sx={{ letterSpacing: "0.02em" }}
                      color="#F2F2F2"
                      gutterBottom
                      align="left"
                    >
                      {title}
                    </Title>

                    <Title
                      variant={{ xs: "h6", sm: "h5", md: "h4" }}
                      color="secondary.light"
                      sx={{
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        mb: 5,
                        opacity: 0.2,
                      }}
                    >
                      {subtitle}
                    </Title>
                    <LaunchButton size="large" sx={{ width: "120px" }}>
                      Enquiry
                    </LaunchButton>
                  </Stack>
                </Box>
              </div>
            </Grid>
            <Grid item xs={0} md={4} lg={4}>
              <Box>
                <Image
                  src={bg}
                  alt={"bg"}
                  width={"100"} // Set the width in pixels1
                  height={"500"} // Set the height in pixels
                  layout="responsive" // or "fixed" or "fill" based on your requirements
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroPage;
