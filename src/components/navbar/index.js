import React from "react";
import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SwitchButton } from "../../components";
import * as styles from "./navbar.styles";

// assets
import Logo from "../../assets/logo.svg";
import SendIcon from "../../assets/send-icon.svg";


import { useState } from 'react';

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
    label: "Questions",
    route: "#questions",
  },
];

const languages = [
  { label: "RU", value: "ru" },
  { label: "ENG", value: "eng" },
];

const Navbar = () => {
  const [language, setLanguage] = React.useState("eng");

  const [isVisible, setIsVisible] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);

  const [isMenu, setIsMenu] = React.useState(false);
  const handleMenu = () => setIsMenu(!isMenu);

  const theme = useTheme();
  const screenDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const screenDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangeLanguage = (value) => setLanguage(value);

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

  async function connectAccount(){
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        setAccounts(accounts);
    }
  }
  
  const [accounts, setAccounts] = useState([]);
  const isConnected = Boolean(accounts[0]);

  return (
    <>
      <Box sx={isVisible ? styles.root : styles.rootHide}>
        {/* <Box
          component="img"
          sx={{ height: { xs: "1rem", sm: "1.5rem" } }}
          src={Logo}
          alt="logo"
        /> */}
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
        <Box sx={styles.buttonContainer}>
          {/* {!screenDownSm && (
            <SwitchButton
              value={language}
              onChange={handleChangeLanguage}
              options={languages}
            />
          )} */}
          { isConnected ? (
                <Button
                sx={{ minWidth: "11rem" }}
                size={screenDownSm ? "small" : "medium"}
                variant="contained"
                >
                <Typography variant="h3" color="tertiary.main">
                    Connected
                </Typography>
                </Button>
                ) : (
                <Button
                  sx={{ minWidth: "11rem" }}
                  size={screenDownSm ? "small" : "medium"}
                  variant="contained"
                  onClick={connectAccount}
                  accounts={accounts} setAccounts={setAccounts}
                >
                <Typography variant="h3" color="tertiary.main">
                    Connect Wallet
                </Typography>
                </Button>
                )}
          
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
          <SwitchButton
            value={language}
            onChange={handleChangeLanguage}
            options={languages}
          />
          <Box sx={styles.navlist}>
            {navlinks.map((navlink, index) => (
              <Link
                href={navlink.route}
                fontWeight={400}
                color="secondary"
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
              <img style={{ width: "22px" }} alt="send-icon" src={SendIcon} />
            </Link>
            <Typography variant="body2" color="secondary.main">
              2022 Ⓒ‎TUD, All Rights Reserved
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
