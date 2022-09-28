import React from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

// assets
// import Birb from "../../assets/156.png";
//import Birbs from "../../assets/9birbs.jpg";

const WhoIsTudy = () => {
  const { ref, inView } = useInView();
  const [visibleValue, setVisibleValue] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY && inView) {
        scrollY > window.scrollY && setVisibleValue(visibleValue - 1);
        scrollY < window.scrollY && setVisibleValue(visibleValue + 1);
      }
      setScrollY(window.scrollY);
    });
  });

  return (
    <Box id="about"
      sx={{
        position: "relative",
        marginTop: { sm: `calc(10% - ${visibleValue * 7}px)`, xs: "5%" },
        marginBottom: "100px",
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: { lg: "15%", sm: "25%", xs: "50%" },
          width: {
            xs: "100%",
            sm: `calc(70% - ${visibleValue * 5}px)`,
            lg: `calc(50% - ${visibleValue * 5}px)`,
            xl: `calc(45% - ${visibleValue * 5}px)`,
          },
        }}
        // src={Birb}
        // alt="birb"
      />
      <Box
        ref={ref}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "primary.main",
          borderRadius: "36px",
          padding: { md: "5rem 10rem", xs: "1.25rem 1rem" },
          paddingLeft: { md: "1", xs: "1rem" },
          position: "relative",
          flexDirection: { md: "column", xs: "column" },
        }}
      > 
        
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center"  },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            variant="h1"
          >
            IMMINENT DEATH THREAT!
          </Typography>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center"  } }}
            variant="h2"
          >
            {/* Collection of 10.000 unique birbs created by digital artists at MARBA LABS.
            <br />
            <br />
            By minting a birb/eth NFT, you automatically become a member of an exclusive holder community 
            on our Discord server - "The Birb Hollow"
            <br />
            You also gain access to taking part in contests in our GameFi project - "The Lost Birb" where you can compete to win USDT. */}

            
            <br />
            THE OUTBREAK AT MARBA LABS CAUSED 10.000 BIRBS TO ESCAPE INTO OUR WORLD. 
            TRAPPED IN THE METAVERSE JUNGLE THEY ARE LOOKING FOR A WAY OUT.
            <br />
            <br />
            BIRBS MIGHT LOOK CUTE, HOWEVER, THE DEADLY VIRUS CARRIED IN THEIR FEATHERS WILL ASPHYXIATE THE VICTIM.
            <br />
            AS LONG AS THE BIRBS STAY LOST IN THE JUNGLE, THE VIRUS WILL CONTINUE TO SPREAD.
            <br />
            <br />
            YOUR DUTY IS TO LEAD YOUR BIRB OUT OF THE METAVERSE JUNGLE! 
            <br />
            THE LOST BIRB GAME AWAITS YOU!
            <br />
            

          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center" },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            variant="h1"
          >
            Who are we?
          </Typography>
          <Box>
            <Typography
            sx={{ textAlign: { md: "center", xs: "center" }, fontFamily:'Monoton' }}
            variant="h1"
            >
              MARBA LABS
            </Typography>
          </Box>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center" } }}
            variant="h2"
          >
            A collective of artists, developers, and designers. Based in Marbella, Spain.
            Who are determined to be open and transparent with their work.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoIsTudy;
