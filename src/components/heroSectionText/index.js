import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
//import AnimatedText from "./AnimatedText";

// assets
import TwitterLogo from "../../assets/twitter_32x32.png";
import ThickSpin  from "../../assets/thick_spin.gif";

export default function HeroSectionText() {
  // const placeholderText = [
  //   { text: "birb/eth" },
  //   {
  //     text: "birb",
  //     superText: "NFT",
  //   },
  // ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <Box id="about">
      <Box sx={root}>
        <Box sx={textWrapper}>
          <motion.div
            className="App"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="container">
            <img style={{ width: "14rem" }} alt="send-icon" src={ThickSpin} />
              {/* {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })} */}
            </div>
          </motion.div>
        </Box>
        <Box sx={linkWrapper}>
          <Typography
            sx={{
              opacity: 0.5,
              textDecoration: "underline",
              color: "secondary.main",
            }}
            variant="body1"
          >
           
          </Typography>
          <Link sx={sendLink} href="#">
            {/* <Box sx={sendLinkBg} /> */}
            <img style={{ width: "60px" }} alt="send-icon" src={TwitterLogo} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

// const root = {
//   dispaly: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   width: "100%",
// };

const root = {
  width: "100%",
  background: `url(${require("../../assets/night_waterfall.webp")})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  gap: { md: "350px", xs: "60px" },
};

const textWrapper = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: { md: "750px", sm: "500px", xs: "400px" },
};

// const sendLinkBg = {
//   backgroundColor: "secondary.main",
//   opacity: 0.1,
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
// };

const sendLink = {
  position: "relative",
  height: "68px",
  width: "68px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const linkWrapper = {
  display: { md: "flex", xs: "none" },
  alignItems: "center",
  justifyContent: "space-between",
  px: "80px",
};
