import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

// import Image from "../../assets/bird.jpg";

import Birb1 from "../../assets/1.png";
import Birb2 from "../../assets/2.png";
import Birb3 from "../../assets/3.png";

const data = [
  {
    name: "BirbDad",
    userType: "CEO + Lead Developer",
    src: Birb1,
  },
  {
    name: "The Duke",
    userType: "CMO ",
    src: Birb2,
  },
  {
    name: "Shegs",
    userType: "Community manager",
    src: Birb3,
  },
  
];

const Team = () => {
  return (
    <Box sx={root} id="team">
       <Box sx={{ maxWidth: "800px" }}>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center" },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            color="secondary.main"
            variant="h1"
          >
            Who are we?
          </Typography>
          <Box>
            <Typography
            sx={{ textAlign: { md: "center", xs: "center" }, fontFamily:'Monoton' }}
            color="secondary.main"
            variant="h1"
            >
              MARBA LABS
            </Typography>
          </Box>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center" } }}
            color="secondary.main"
            variant="h2"
          >
            <br />
            A collective of artists, developers, and designers. Based in Marbella, Spain.
            Who are determined to be open and transparent with their work.
            bringing art ahead of NFTs.
            <br/>
            <br/>
            At MarbaLabs everyone shares the love for rare kinds of birds, the creatures that play one of the most important roles in our ecosystem! 
            We wanted to share our love 
            with the web3 community by releasing a stylised NFT collection and celebrating the incredible range of colour birds bring into our world!
            <br/>
          </Typography>
        </Box>
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
            <Box component="img" sx={cardImg} src={value.src} alt="img" />
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
  borderRadius: "20%",
};

const card = { width: { md: "300px", xs: "160px" }, textAlign: "center" };
