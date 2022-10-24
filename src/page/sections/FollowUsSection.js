import { Box, Link, Typography } from "@mui/material";
// import Image from "../../assets/social-photo.svg";
// import SendIcon from "../../assets/send-icon.svg";
import TwitterLogo from "../../assets/twitter_32x32.png";

import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

import TwitterProfile from "../../assets/twitter_profile.png";
import DiscordLogo from "../../assets/discord_logo.png";

const FollowUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        gap: { md: "5rem", xs: "1.5rem" },
        maxWidth: "1030px",
        marginX: "auto",
        justifyContent: { lg: "space-between", xs: "center" },
        alignItems: "center",
      }}
      component={motion.div}
      {...bounceUpsettings}
    >
      <Box
        component="img"
        src={TwitterProfile}
        sx={{
          display: "inline",
          width: { md: "389px", xs: "220px" },
          maxWidth: { md: "389px", xs: "220px" },
          minWidth: { md: "389px", xs: "220px" },
        }}
      />
      <Box sx={{ display: "flex", flexDirection:"column"}}>
        <Typography sx={desc}>
          Follow us on Twitter and join our Discord server to get the latest updates on our project, take part in giveaways and become part of our community.
        </Typography>
        <Box sx={{ display: "flex", flexDirection:"row", gap: { md: "5rem", xs: "1.5rem" },}}>
          <Link
            sx={{
              mx: { lg: 0, xs: "auto" },
              position: "relative",
              height: "68px",
              width: "68px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            href="https://twitter.com/birbweb3"
          >
      
            <img style={{ width: "60px" }} alt="send-icon" src={TwitterLogo} />
          </Link>
          <Link
            sx={{
              mx: { lg: 0, xs: "auto" },
              position: "relative",
              height: "68px",
              width: "68px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            href="https://discord.gg/nJAcG3He"
          >
          
            <img style={{ width: "80px" }} alt="send-icon" src={DiscordLogo} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FollowUs;

const desc = {
  fontSize: { md: "42px", xs: "20px" },
  textAlign: { lg: "left", xs: "center" },
  mt: { md: "72px", xs: "24px"},
  mb: { md: "72px", xs: "24px" },
  color: "secondary.main",
  maxWidth: { md: "initial", xs: "558px" },
};
