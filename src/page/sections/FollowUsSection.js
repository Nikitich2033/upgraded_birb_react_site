import { Box, Link, Typography } from "@mui/material";
// import Image from "../../assets/social-photo.svg";
// import SendIcon from "../../assets/send-icon.svg";
import TwitterLogo from "../../assets/twitter_32x32.png";

import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

import TwitterProfile from "../../assets/twitter_profile.png";

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
          width: { md: "389px", xs: "220px" },
          maxWidth: { md: "389px", xs: "220px" },
          minWidth: { md: "389px", xs: "220px" },
        }}
      />
      <Box>
        <Typography sx={desc}>
          Follow us on Twitter to get the latest updates on our project and become part of our community.
        </Typography>

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
          <Box
            // sx={{
            //   backgroundColor: "secondary.main",
            //   opacity: 0.1,
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   width: "100%",
            //   height: "100%",
            // }}
          />
          <img style={{ width: "60px" }} alt="send-icon" src={TwitterLogo} />
        </Link>
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
