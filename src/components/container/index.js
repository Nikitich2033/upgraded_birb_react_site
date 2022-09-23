import React from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "../../components";
import * as styles from "./container.styles";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "tertiary.main",
        width: "100%",
      }}
    >
      <Box sx={styles.root}>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Container;
