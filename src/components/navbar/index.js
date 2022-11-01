import React from "react";
import {
  Box,
  //Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//import { SwitchButton } from "../../components";
import * as styles from "./navbar.styles";

// assets
import TwitterLogo from "../../assets/twitter_32x32.png";
import DiscordLogo from "../../assets/discord_logo.png";

const navlinks = [
  {
    label: "About",
    route: "#about",
  },
  {
    label: "Roadmap",
    route: "#roadmap",
  },
  {
    label: "Team",
    route: "#team",
  },
  {
    label: "FAQ & Social",
    route: "#questions",
  },
  // {
  //   label: "Game Alpha",
  //   route: "https://thelostbirb.com",
  // },
];

const Navbar = ({ accounts, setAccounts }) => {

  const [isVisible, setIsVisible] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);

  const [isMenu, setIsMenu] = React.useState(false);
  const handleMenu = () => setIsMenu(!isMenu);

  const theme = useTheme();
  const screenDownMd = useMediaQuery(theme.breakpoints.down("md"));
  //const screenDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (screenDownMd && isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        scrollY > window.scrollY && setIsVisible(true);
        window.scrollY > 150 && scrollY < window.scrollY && setIsVisible(false);
      }
      setScrollY(window.scrollY);
    });
  });

  // async function connectAccount(){
  //   if (window.ethereum) {
  //       const accounts = await window.ethereum.request({
  //           method: "eth_requestAccounts"
  //       })

  //       setAccounts(accounts);
  //   }
  // }
  
  //const [accounts, setAccounts] = useState([]);
  //const isConnected = Boolean(accounts[0]);

  return (
    <>
      <Box sx={isVisible ? styles.root : styles.rootHide} >
        <Box>
          <Typography variant="h1" color="secondary.main">
              birb/eth
          </Typography>
        </Box>
        {!screenDownMd && (
          <Box sx={styles.navlist}>
            {navlinks.map((navlink, index) => (
              <Link
                href={navlink.route}
                fontWeight={300}
                variant="h6"
                color="secondary"
                key={index}
              >
                {navlink.label}
              </Link>
            ))}
          </Box>
        )}
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
      
            <img style={{ width: "35px" }} alt="send-icon" src={TwitterLogo} />
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
          
            <img style={{ width: "60px" }} alt="send-icon" src={DiscordLogo} />
          </Link>
        </Box>
        {screenDownMd && (
          <Box
            onClick={handleMenu}
            sx={isMenu ? styles.iconMenuActive : styles.iconMenu}
          >
            <span></span>
            <span></span>
          </Box>
        )}
      </Box>
      {screenDownMd && (
        <Box
          sx={{
            ...styles.mobileMenu,
            bottom: isMenu ? 0 : "100%",
            opacity: isMenu ? 1 : 0,
          }}
        >
          {/* <SwitchButton
            value={language}
            onChange={handleChangeLanguage}
            options={languages}
          /> */}
          <Box sx={styles.navlist}>
            {navlinks.map((navlink, index) => (
              <Link
                href={navlink.route}
                fontWeight={400}
                color="secondary"
                variant="h6"
                fontSize="36px"
                key={index}
                onClick={handleMenu}
              >
                {navlink.label}
              </Link>
            ))}
          </Box>
          <Box>
            <Link sx={styles.sendLink} href="#" onClick={handleMenu}>
              <Box sx={styles.linkBg} />
              <img style={{ width: "22px" }} alt="send-icon" src={TwitterLogo} />
            </Link>
            <Typography variant="body2" color="secondary.main">
              2022 Ⓒ‎birb, All Rights Reserved
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
