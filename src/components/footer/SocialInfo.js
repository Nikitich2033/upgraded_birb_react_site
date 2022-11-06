import { Box, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";

import TwitterLogo from "../../assets/twitter_32x32.png";
import DiscordLogo from "../../assets/discord_logo.png";
import { bounceUpsettings } from "../lib/animations";

const SocialInfo = () => {
  return (
    <Box sx={root}>
      <Box sx={card} component={motion.div} {...bounceUpsettings}>
        <Typography sx={label}>
          If you have any questions, message us
        </Typography>
        
        <Box sx={{ display: "inline", gap: "2.4rem" }}>
          <Link sx={sendButton} href="https://twitter.com/birbweb3">
            <Box sx={sendButtonBg} />
            <img style={{ width: "32px" }} alt="send-icon" src={TwitterLogo} />
          </Link>
        </Box>
        <Box sx={{ display: "inline", gap: "2.4rem" }}>
          <Link sx={sendButton} href="https://discord.gg/uVQKMHpdjv">
            <Box sx={sendButtonBg} />
            <img style={{ width: "60px" }} alt="send-icon" src={DiscordLogo} />
          </Link>
        </Box>
        
      </Box>
      <Box sx={cardEmail} component={motion.div} {...bounceUpsettings}>
        <Typography sx={label}>
          For collabs and ideas, contact us via
        </Typography>
        <Link href="mailto:marbalabs@gmail.com" sx={socialLink}>
          <Box sx={sendButtonBg} />
          <Typography variant="h3" >
           marbalabs@gmail.com
          </Typography>
          
        </Link>
      </Box>
    </Box>
  );
};

export default SocialInfo;

const root = {
  display: "flex",
  flexDirection: { md: "row", xs: "column" },
  gap: "2.4rem",
  maxWidth: "1220px",
  margin: "0 auto",
  px: { xs: "24px", md: 0 },
  "& > *": {
    flex: { md: 2, xs: 1 },
  },
};

const card = {
  minHeight: { md: "293px" },
  background: "#1a1a1a",
  borderRadius: "24px",
  padding: { md: "4.8rem", xs: "36px 24px" },
  position: "relative",
  zIndex: 20,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "36px",
};

const cardEmail = {
  minHeight: { md: "293px" },
  background: "#1a1a1a",
  borderRadius: "24px",
  padding: { md: "4.8rem", xs: "36px 24px" },
  position: "relative",
  zIndex: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "36px",
};

const label = {
  fontSize: { md: "36px", xs: "22px" },
  color: "secondary.main",
  lineHeight: 1.2,
};

const socialLink = {
  position: "relative",
  height: "68px",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "24px",
  fontSize: { xs: "24px" },
  fontWeight: 500,
  lineHeight: 1,
};

const sendButton = {
  position: "relative",
  height: "68px",
  width: "68px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const sendButtonBg = {
  backgroundColor: "secondary.main",
  opacity: 0.1,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
