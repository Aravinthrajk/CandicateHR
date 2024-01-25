import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/contact/contact";
import About from "@/components/homepage/about";
import OurClient from "@/components/homepage/client";
import HeroPage from "@/components/homepage/hero";
import Intro from "@/components/homepage/intro";
import Project from "@/components/homepage/project";
import OurService from "@/components/homepage/service";
import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import Support from "@/components/homepage/support";

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <>
      <Box>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <HeroPage />
        </motion.div>
        <Grid container>
          <Grid item xs={12}>
            {/* <motion.div
              ref={ref}
              initial="hidden"
              animate="visible"
              variants={variants}
            > */}
              <Intro />
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12}>
            {/* <motion.div initial="hidden" animate="visible" variants={variants}> */}
              <OurService />
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12}>
            {/* <motion.div initial="hidden" animate="visible" variants={variants}> */}
              <Project />
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12}>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
              <About />
            {/* </motion.div> */}
          </Grid>
         

          <Grid item xs={12}>
            <Box id="contact">
              {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
                <ContactForm />
              {/* </motion.div> */}
            </Box>
            {/* <Support /> */}
          </Grid>
          <Grid item xs={12}>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
              <OurClient />
            {/* </motion.div> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
