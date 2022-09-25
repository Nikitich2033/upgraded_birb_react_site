import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

import Image from "../../assets/bird.jpg";

const data = [
  {
    name: "BirbDad",
    userType: "CEO + Lead Developer",
  },
  {
    name: "The Duke",
    userType: "CMO ",
  },
  {
    name: "Shegs",
    userType: "Community manager",
  },
  
];

const Team = () => {
  return (
    <Box sx={root} id="team">
      <Typography
        variant="h1"
        sx={{ mb: { md: "5rem", xs: "2rem" } }}
        color="secondary.main"
      >
        Team
      </Typography>
      <Box sx={teamContainer}>
        {data.map((value, index) => (
          <Box
            sx={card}
            key={index}
            component={motion.div}
            {...bounceUpsettings}
          >
            <Box component="img" sx={cardImg} src={Image} alt="img" />
            <Typography variant="h3" color="secondary.main" sx={{ mt: "20px" }}>
              {value.name}
            </Typography>
            <Typography variant="body1" fontWeight={500} color="#a2a2a2">
              {value.userType}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;

const root = {
  background: "#1a1a1a",
  borderRadius: "36px",
  marginTop: { md: "8.4rem", xs: "4rem" },
  marginBottom: { md: "4.8rem", xs: "2rem" },
  paddingY: { md: "8.5rem", xs: "36px" },
  paddingX: { md: "4rem", xs: "10px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const teamContainer = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: { md: "32px", xs: "16px" },
  maxWidth: "1400px",
  margin: "0 auto",
};

const cardImg = {
  width: { md: "300px", xs: "160px" },
  height: { md: "300px", xs: "160px" },
  borderRadius: "50%",
};

const card = { width: { md: "300px", xs: "160px" }, textAlign: "center" };
