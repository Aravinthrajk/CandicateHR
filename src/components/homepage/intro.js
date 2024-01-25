import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { section2Content } from "@/config/content";
import { motion } from "framer-motion";

const { title, imgSrc } = section2Content;
// const { MainBG, title, main, subtitle } = section1Content;

const Intro = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        width="100"
        sx={{
          // backgroundColor: "secondary.dark",
          py: 6,
          // boxShadow: "0px 15px 10px -15px #111" ,
          // border: "solid grey 1px"
        }}
      >
        {/* {" #5072A7"} */}
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <div data-aos="fade-right">
                <Typography
                  variant="h6"
                  sx={{
                    color: "warm.main",
                    textAlign: "center",
                    alignItems: "center",
                    opacity: ".3",
                  }}
                  lineHeight="1.6"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {title}
                  </motion.span>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={imgSrc}
                  alt=""
                  style={{ height: "auto", width: "80%", maxWidth: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Intro;
