import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import LaunchButton from "../Buttons/LaunchButton";
import Image from "next/image";

const ServiceCard = ({ title, subtitle, image }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverExit = () => {
    setHovered(false);
  };
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid transparent",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={1}>
        <Title variant={{ xs: "h5", sm: "h4" }}>{title}</Title>

        <Box
          sx={{
            overflow: "hidden",
            transition: "box-shadow 0.3s, transform 0.3s",
            boxShadow: hovered ? "0px 10px 20px rgba(0, 0, 0, 0.3)" : "none",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Image
            src={image}
            alt="Your Image"
            width={500} // Set the width in pixels
            height={280} // Set the height in pixels
            layout="responsive" // or "fixed" or "fill" based on your requirements
            style={{
              objectFit: "contain",
              flex: 1,
              borderRadius: "0.5rem",
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.2)" : "scale(1)",
            }}
          />
        </Box>

        <Typography variant="h6" color="#fff" sx={{ opacity: ".3" }}>
          {subtitle}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
