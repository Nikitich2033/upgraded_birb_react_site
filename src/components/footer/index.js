import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { bounceUpsettings } from "../lib/animations";
import SocialInfo from "./SocialInfo";

const Footer = () => {
  return (
    <Box sx={root}>
      <SocialInfo />
      <Box>
        <Typography component={motion.div} {...bounceUpsettings} sx={title}>
          The future
          <br />
          is birb
        </Typography>
        <Box sx={footer}>
          <Typography sx={{ ...link, textDecoration: "none" }}>
            2022 Ⓒ‎birb, All Rights Reserved
          </Typography>
          <Link href="#" sx={link}>
            Privacy Policy
          </Link>
          <Typography sx={{ ...link, textDecoration: "none" }}>
            Designed by
            <Link sx={link} href="#">
              Marba Labs
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const root = {
  width: "100%",
  //background: `url(${require("../../assets/duck.avif")})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  gap: { md: "350px", xs: "60px" },
};

const link = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "16px",
  color: "#a2a2a2",
  opacity: 0.8,
  textDecoration: "underline",
};

const footer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  pt: { md: "56px", xs: "32px" },
  pb: { md: "56px", xs: "16px" },
  gap: "1rem",
  flexDirection: { md: "row", xs: "column" },
};

const title = {
  fontWeight: 500,
  fontSize: { md: "196px", xs: "86px" },
  lineHeight: 1,
  textAlign: "center",
  textTransform: "uppercase",
  color: "primary.main",
};
