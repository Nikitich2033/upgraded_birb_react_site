import { Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import { motion } from "framer-motion";
import { bounceUpsettings } from "../../components/lib/animations";

// import Image1 from "../../assets/1.avif";
// import Image2 from "../../assets/2.avif";
import Image3 from "../../assets/preview.gif";
// import Image4 from "../../assets/4.avif";
// import Image5 from "../../assets/5.avif";
// import Image6 from "../../assets/6.avif";
import Image7 from "../../assets/game.gif";
// import Image8 from "../../assets/8.avif";
// import Tick from "../../assets/tick.svg";

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
          {/* <Box
            component="img"
            src={Image1}
            sx={{ maxWidth: "450px", width: "100%" }}
          /> */}
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
              {/* <img src={Tick} alt="_complete" /> */}
              <span>1</span>
            </div>
          )}
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            JULY 2022
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Collection and analysis of technical requirements, creation of the first concepts,
            original birb designer joins the team.
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
              {/* <img src={Tick} alt="_complete" /> */}
              <span>2</span>
            </div>
          )}
          <Typography variant="h3" color="primary.main">
            SEPTEMBER 2022
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Mint website development and "The Lost Birb" game announcement on Twitter.
          </Typography>
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 3 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {/* <Box component="img" src={Image2} sx={{ width: "100%" }} /> */}
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
            {/* OCTOBER 2022 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Website launch followed by BIRB mint.
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
            {/* NOVEMBER 2022 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
            "The Lost Birb" Season Fall begins
            Start of the first competition for the best birb player with a USDT prize fund.
          </Typography>
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 7 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {/* <Box component="img" src={Image4} sx={{ width: "100%" }} /> */}
        </Box>
        <Box
          sx={{ order: { lg: 0, xs: 9 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {/* <Box component="img" src={Image5} sx={{ width: "100%" }} /> */}
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
            {/* DECEMBER 2022 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
            Announcement of the first season winners and distribution of the prizes to the winners. 
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
            {/* JANUARY 2023 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
           $BRB token tokenomics release.
          </Typography>
        </Box>

        <Box
          sx={{ order: { lg: 0, xs: 11 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {/* <Box component="img" src={Image6} sx={{ width: "100%" }} /> */}
        </Box>
        
        <Box
            sx={{ order: { lg: 0, xs: 13 } }}
            component={motion.div}
            {...bounceUpsettings}
                  > 
          {/* <Link
                href= "https://thelostbirb.com"
                
              > */}
               
          <Box component="img" src={Image7} sx={{ width: "100%" }}/>
         
          {/* </Link> */}
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
            {/* FEBRUARY 2023 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
            With the feedback and new investments "The Lost Birb" game development will continue to bring new features and improvements to the game.
            As well as new ways to earn tokens from your birb NFT!
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
            {/* FEBRUARY 2023 */}
          </Typography>
          <Typography variant="h4" color="secondary.main">
            $BRB token listing and AirDrop for birb/eth NFT holders.
          </Typography>
        </Box>

        <Box
          sx={{ order: { lg: 0, xs: 15 } }}
          component={motion.div}
          {...bounceUpsettings}
        >
          {/* <Box component="img" src={Image8} sx={{ width: "100%" }} /> */}
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
          {/* <img src={Tick} alt="_complete" /> */}
          <span>1</span>
        </div>
        <div className="roadmap-levels__line _1"></div>
      </div>
      <div className="roadmap-levels__item _complete">
        <div className="roadmap-levels__buble">
          {/* <img src={Tick} alt="_complete" /> */}
          <span>2</span>
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
        {/* <div className="roadmap-levels__line _5"></div> */}
      </div>
      {/* <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble"> */}
          {/* <span>6</span> */}
        {/* </div> */}
        {/* <div className="roadmap-levels__line _6"></div> */}
       {/* </div> */}
      {/* <div className="roadmap-levels__item">
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
      </div> */}
      {/* <div className="roadmap-levels__item">
        <div className="roadmap-levels__buble _end"></div>
        <div className="roadmap-levels__line _9"></div>
      </div> */}
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
