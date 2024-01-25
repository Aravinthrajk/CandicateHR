import React from 'react';
import { Box, Typography, Container, Grid,Stack, } from '@mui/material';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      component="footer"
      width="100vw"
      sx={{
        backgroundColor : "rgb(255,255,255,0.1)",
        color: '#fff',
        py: 4,
        opacity : 0.3
      }}
    >
      <Container maxWidth={'xl'}>
        <Grid container>
            <Grid item xs={12} md={6} lg={4}>
                <Typography variant='h5'>Kanvey Tech</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Typography>Contact us</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Typography>Follow US</Typography>
                <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  height:"2.5rem",
                  width:"2.5rem",
                  borderRadius: "25%",
                  // background: "info.main",
                  padding: "10px",
                  '&:hover': {
                    background:"red" 
                  },
              
                }}
              >
                <TwitterIcon sx={{ color: "white" }} />
              </Box>
              <Box
                sx={{
                  borderRadius: "25%",
                  background: "secondary",
                  padding: "10px",
                  '&:hover' :{
                    background:'primary'
                  }
                }}
              >
                <FacebookIcon />
              </Box>
              <Box
                sx={{
                  borderRadius: "25%",
                  background: "secondary",
                  padding: "10px",
                  '&:hover' :{
                    background:'primary'
                  }
                }}
              >
                <InstagramIcon />
              </Box>
              <Box
                sx={{
                  borderRadius: "5%",
                  background: "primary.main",
                  padding: "10px",
                  '&:hover' :{
                    background:'primary.main'
                  }
                }}
              >
                <YouTubeIcon />
              </Box>
            </Stack>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
