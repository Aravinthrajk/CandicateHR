import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { serviceContent } from "@/config/content";
import Title from "../Title";
import ServiceCard from "../Card/servicecard";

const { title, subtitle, top, center, bottom, ITEMS } = serviceContent;
const OurService = () => {
  const text = "Our Service";

  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once when it comes into view
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  const theme = useTheme();

  return (
    <>
      <Container sx={{ mt: { xs: 2 } }}>
        <Title
          variant={{ xs: "h3", md: "h2" }}
          sx={{ mb: { xs: 3, md: 4 } }}
          align="center"
        >
          {Array.isArray(title) &&
            title.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
        </Title>
        <Grid container spacing={3}>
          {ITEMS.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <ServiceCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Box
        left="0"
        width="100vw"
        sx={{
          py: 5,
        }}
      >
        {" "}
        <Container maxWidth="lg">
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
                {title.split(" ").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: inView ? index * 0.1 : 0,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                sx={{ lineHeight: 1.5 }}
              >
                {subtitle}
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
                <Box>
                  <img
                    src={top.image}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title variant={{ xs: "h5", md: "h4" }}>{top.title}</Title>

                  <Typography variant="h6" color="warm.main" sx={{ pb: 2 }}>
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
              sx={{ mt: { xs: 5, md: 8 } }}
            >
             
              <Grid item xs={12} md={6}>
                <Stack spacing={2} sx={{ maxWidth: 480 }}>
                  <Title variant={{ xs: "h5", md: "h4" }}>{bottom.title}</Title>

                  <Typography variant="h6" color="warm.main" sx={{ pb: 2 }}>
                    {bottom.subtitle}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={bottom.image}
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
    </>
  );
};

export default OurService;
