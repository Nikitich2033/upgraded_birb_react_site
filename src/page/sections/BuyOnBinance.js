import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import AppName from "../../assets/footer-logo.svg";
import { bounceUpsettings } from "../../components/lib/animations";

const BuyOnBinance = () => {
  return (
    <Box sx={{ paddingY: "5rem" }}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "36px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: { md: "110px 100px", xs: "36px 16px" },
          display: "flex",
          justifyContent: { md: "space-between", xs: "center" },
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <motion.div {...bounceUpsettings}>
          <Box
            component="img"
            src={AppName}
            sx={{ width: "100%", maxWidth: { md: "530px", xs: "230px" } }}
          />
        </motion.div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { md: "flex-start", xs: "center" },
          }}
          component={motion.div}
          {...bounceUpsettings}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "48px" },
              textAlign: { md: "left", xs: "center" },
              fontWeight: 500,
              pt: "36px",
              pb: "16px",
            }}
          >
            Don't miss it, be
            <br /> the first
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mx: { xs: "auto", md: 0 }, minWidth: "316px" }}
          >
            Buy on Binance
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyOnBinance;
