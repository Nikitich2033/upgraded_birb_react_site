import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

import Image1 from "../../assets/1.avif";
import Image2 from "../../assets/2.avif";
import Image3 from "../../assets/3.gif";
import Image4 from "../../assets/4.avif";
import Image5 from "../../assets/5.avif";
import Image6 from "../../assets/6.avif";
import Image7 from "../../assets/7.gif";
import Image8 from "../../assets/8.avif";
import Tick from "../../assets/tick.svg";

const RoadMap = () => {
  const theme = useTheme();
  const screenDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        maxWidth: "1226px",
        mx: "auto",
        "& img": { maxWidth: "450px" },
      }}
      id="roadmap"
    >
      <Typography
        variant="h1"
        color="primary.main"
        sx={{ textAlign: "center" }}
      >
        Roadmap
      </Typography>
      <Box sx={roadmapContainer}>
        <Box
          sx={{ order: { lg: 0, xs: 1 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box
            component="img"
            src={Image1}
            sx={{ maxWidth: "450px", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 2 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <img src={Tick} alt="_complete" />
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Preparing for a project, main foundation
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Collection and analysis of technical requirements, creation of a
            functional prototype, formation of a team of WEB 3.0 industry
            leaders.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 4 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <img src={Tick} alt="_complete" />
            </div>
          )}
          <Typography variant="h3" color="primary.main">
            PLAYERSIDE
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Collection and analysis of technical requirements, creation of a
            Development of a personal account and interface solutions for
            intuitive interaction with the game.
          </Typography>
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 3 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image2} sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 5 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image3} sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 6 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>3</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Launching our collection on Binance Blockchain
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Our collection of 10 000 unique characters is divided into four
            equal parts: I Drop - $149, II Drop - $199, III Drop - $249, IV Drop
            - $299.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 8 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>4</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Tokenomics
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Development of project tokenomics, automation of mutual settlements
            between all participants of the game process.
          </Typography>
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 7 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image4} sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 9 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image5} sx={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 10 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>5</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Game series development
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Creation of interactive prototypes in accordance with the concept
            and documentation, active testing within the team.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 12 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>6</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Active marketing campaign
          </Typography>
          <Typography variant="h4" color="secondary.main">
            We want as many people as possible to know about TUD, so a massive
            marketing campaign on all major social networks is an important
            milestone for us.
          </Typography>
        </Box>

        <Box
          sx={{ order: { lg: 0, xs: 11 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image6} sx={{ width: "100%" }} />
        </Box>

        <Box
          sx={{ order: { lg: 0, xs: 13 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image7} sx={{ width: "100%" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 14 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>7</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Testing the beta version of the game
          </Typography>
          <Typography variant="h4" color="secondary.main">
            The first test launch of a P2E game and collecting feedback together
            with partners and the largest TUD holders.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { md: "2rem", xs: "12px" },
            justifyContent: "center",
            order: { lg: 0, xs: 16 },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {screenDownLg && (
            <div className="roadmap-levels__buble">
              <span>8</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Full-scale launch platform with Metaverse games
          </Typography>
          <Typography variant="h4" color="secondary.main">
            The product is ready for public announcement and a lot of attention
            from the gaming community.
          </Typography>
        </Box>

        <Box
          sx={{ order: { lg: 0, xs: 15 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Box component="img" src={Image8} sx={{ width: "100%" }} />
        </Box>
        <Stepper />
      </Box>
      <Box component={motion.div} {...bounceUpsettings}>
        <Typography variant="h3" color="primary.main" textAlign="center">
          This is just the beginning...
        </Typography>
      </Box>
    </Box>
  );
};

export default RoadMap;

const Stepper = () => {
  return (
    <Box
      sx={{
        display: { lg: "flex !important", xs: "none !important" },
        flexDirection: "column",
        position: "absolute",
        left: "47%",
        top: 0,
        pt: "5rem",
      }}
    >
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble _complete">
          <img src={Tick} alt="_complete" />
        </div>
        <div className="roadmap-levels__line _1"></div>
      </div>
      <div className="roadmap-levels__item _complete">
        <div className="roadmap-levels__buble">
          <img src={Tick} alt="_complete" />
        </div>
        <div className="roadmap-levels__line _2"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>3</span>
        </div>
        <div className="roadmap-levels__line _3"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>4</span>
        </div>
        <div className="roadmap-levels__line _4"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>5</span>
        </div>
        <div className="roadmap-levels__line _5"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>6</span>
        </div>
        <div className="roadmap-levels__line _6"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>7</span>
        </div>
        <div className="roadmap-levels__line _7"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble">
          <span>8</span>
        </div>
        <div className="roadmap-levels__line _8"></div>
      </div>
      <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble _end"></div>
        <div className="roadmap-levels__line _9"></div>
      </div>
    </Box>
  );
};

const roadmapContainer = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: { lg: "1fr 1fr", xs: "1fr" },
  gridTemplateRows: "1fr",
  gap: { md: "5rem", xs: "2rem" },
  pt: { md: "3rem", xs: "1rem" },
  pb: { md: "6rem", xs: "2rem" },
  position: "relative",
  "& > div": {
    display: { lg: "block", xs: "flex" },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: "650px",
    margin: "auto",
    px: { lg: 0, xs: "32px" },
  },
};
