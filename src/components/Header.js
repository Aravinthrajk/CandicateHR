import React, {useRef } from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import Drawer for the side menu
import { Divider, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useRouter } from "next/router";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { appBar } from "@/config/content";

const {title,navLinks}= appBar
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const router = useRouter(); // Get the router object


  const staggerList = stagger(0.1, { startDelay: 0.25 });

 

  const isIndexPage = router.pathname === "/"; // Check if the current page is the index page

  const { y } = useWindowScroll(); // Use the useWindowScroll hook to get the scroll position
  const isScrolled = y > 0;

  const headerStyle = {
    backgroundColor: isIndexPage
      ? isScrolled
        ? "#050517"
        : "transparent"
      : "black",
    transition: "background-color 0.3s",
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    // alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const theme = useTheme();
  const contactRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:1100px)");
  const imageWidth = isMobile ? 900 : 1000;
  const imageHeight = isMobile ? 1000 : 1200;
  const isMobile1 = useMediaQuery(theme.breakpoints.down("sm"));
  const order = isMobile1 ? 2 : 1;

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
   
      <AppBar elevation={0} component="nav" position="fixed" sx={headerStyle}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={7} sm={7} lg={3.5} xl={4}>
            <Stack direction={"row"} spacing={2}>
              <Link href="/" component="div">
                <Image
                  src="/project/Logo.jpg"
                  alt="opalminds logo"
                  width={200}
                  height={40}
                />
              </Link>
              <Hidden lgUp>
                <Box
                  height={70}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#d9a60b",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    kanvey
                  </Typography>
                </Box>
              </Hidden>
              <Hidden lgDown>
                <Box
                  height={70}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "primary" }}>
                   kanvey
                  </Typography>
                </Box>
              </Hidden>
            </Stack>
          </Grid>

          {/* small screen menubar */}
          <Hidden lgUp>
            <Grid item xs={4} sm={3}>
              <Toolbar>
                <Box  ref={scope}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenu}
                  sx={{ justifyContent: "flex-end" }}
                >
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
                </Box>
                <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                  {/* Side menu items for small screens */}
                  <DrawerHeader
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">kanvey</Typography>
                    <IconButton onClick={handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </DrawerHeader>

                  <Divider />
                  <div
                    style={{
                      width: "200px",
                    }}
                  >
                    <Stack direction={"column"}>
                      <Link href="/">
                        <Button>Home</Button>
                      </Link>
                      <Divider />
                      <Link href="/">
                        <Button>About us</Button>
                      </Link>{" "}
                      <Divider />
                      <Button sx={{ justifyContent: "left" }}>Projects</Button>
                      <Divider />
                      <Link href="/">
                        <Button>Contact Us</Button>
                      </Link>{" "}
                      <Divider />
                    </Stack>
                  </div>
                </Drawer>
              </Toolbar>
            </Grid>
          </Hidden>

          {/* large screen toolbar */}
          <Hidden lgDown width={isMobile}>
            <Grid>
              <Toolbar>
                <Stack
                  direction={"row"}
                  spacing={2}
                  justifyContent={"flex-end"}
                  alignItems={"center"}
                  sx={{ pt: 4 }}
                >
                  <Link href="/">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warm.main",
                        "&:hover": { color: "warning.light" },
                      }}
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warm.main",
                        "&:hover": { color: "warning.light" },
                      }}
                    >
                      About-Us
                    </Button>
                  </Link>

                  <Button
                    onClick={scrollToContact}
                    sx={{
                      fontSize: "1.2rem",
                      color: "warm.main",
                      "&:hover": { color: "warning.light" },
                    }}
                  >
                    Contact-Us
                  </Button>
                </Stack>
              </Toolbar>
            </Grid>
          </Hidden>
        </Grid>
        </Container>
      </AppBar>
    </>
  );
}
