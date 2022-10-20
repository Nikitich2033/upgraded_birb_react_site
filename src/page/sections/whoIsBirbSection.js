import React from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

// assets
// import Birb from "../../assets/156.png";
//import Birbs from "../../assets/9birbs.jpg";

const WhoIsBirb = () => {
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
            "THE LOST BIRB" GAME 
            <br />
            COMING SOON!
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center"  },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            variant="h1"
          >
            <br />
            SINGLE PLAYER
          </Typography>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center"  } }}
            variant="h2"
          >
        
            <br />
            🦜 All players, non-holders and holders will be able to compete for top spots on the high-score leaderboard where the top players will get rewards! 👀
            <br />
            <br />
            🦜  All Birb holders will get access to Seasonal Contests and Challenges that they can complete to win USDT or other crypto rewards!
            <br />
            <br />
            🦜 Easy to learn and play on the go!
            <br />
            <br />

            
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center"  },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            variant="h1"
          >
            <br />
            MULTIPLAYER
          </Typography>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center"  } }}
            variant="h2"
          >
              <br />
              🦜 Both non-holders and holders will get access to a 1 v 1 game-mode where they will be able to compete directly against each other. Players will be able to see their opponents' birb for a more thrilling experience!
              <br />
              <br />
              🦜 The bravest players a 1 v 1 game mode will be available, where each player will place their tokens into a prize bank and the winner will take the bank with him! This game mode will be available for all! But holders will get access to bigger stakes while non-holders will be limited.
              <br />
              <br />
              🦜 1 v 1 will include a ranking system where players will be able to rank up to enter higher divisions with higher stakes.
              <br />
              <br />
              
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "center", xs: "center"  },
              mb: { md: 0, xs: "48px" },
              py: { md: 0, xs: "18px" },
            }}
            variant="h1"
          >
            THE STORY SO FAR...
            
          </Typography>
          <Typography
            sx={{ textAlign: { md: "center", xs: "center"  } }}
            variant="h2"
          >
            
            AN OUTBREAK AT MARBA LABS CAUSED 10.000 BIRBS TO ESCAPE INTO OUR WORLD. 
            TRAPPED IN THE METAVERSE JUNGLE THEY ARE LOOKING FOR A WAY OUT.
            <br />
            <br />
            BIRBS MIGHT LOOK CUTE, HOWEVER, THE DEADLY VENOM CARRIED IN THEIR FEATHERS WILL ASPHYXIATE THE VICTIM.
            <br />
            AS LONG AS THE BIRBS STAY LOST IN THE JUNGLE, THE VIRUS WILL CONTINUE TO SPREAD.
            <br />
            <br />
            YOUR DUTY IS TO LEAD YOUR BIRB OUT OF THE METAVERSE JUNGLE! 
            <br />
            THE LOST BIRB GAME AWAITS YOU!
          </Typography>
          
        </Box>
      
      </Box>
    </Box>
  );
};

export default WhoIsBirb;
