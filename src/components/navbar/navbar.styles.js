export const rootHide = {
  width: "100%",
  height: { md: "100px", xs: "70px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: { md: "-100px", xs: "-70px" },
  left: 0,
  px: { md: "56px", xs: "20px" },
  backgroundColor: "tertiary.main",
  zIndex: 99999999,
  transition: "all 0.2s ease-in-out",
};
export const root = {
  width: "100%",
  height: { md: "100px", xs: "70px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  left: 0,
  px: { md: "56px", xs: "20px" },
  backgroundColor: "tertiary.main",
  zIndex: 99999999,
  transition: "all 0.2s ease-in-out",
};

export const navlist = {
  display: "flex",
  flexDirection: { md: "row", xs: "column" },
  alignItems: "center",
  gap: { md: "4.8rem", xs: "2.8rem" },
};

export const buttonContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5rem",
};

export const iconMenu = {
  color: "#fff",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  verticalAlign: " baseline",
  display: "block",
  width: "22px",
  height: "20px",
  position: "relative",
  top: "5px",
  cursor: "pointer",
  "& > span": {
    transition: "all .3s ease-in 0s",
    position: "absolute",
    top: "calc(50% - 1px)",
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    left: 0,
    "&:first-child": {
      top: 0,
    },
    "&:last-child": {
      bottom: "1rem",
    },
  },
};

export const iconMenuActive = {
  color: "#fff",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: 0,
  verticalAlign: " baseline",
  display: "block",
  width: "22px",
  height: "20px",
  position: "relative",
  top: "5px",
  cursor: "pointer",
  "& > span": {
    transition: "all .3s ease-in 0s",
    position: "absolute",
    top: "calc(50% - 1px)",
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    left: 0,
    "&:first-child": {
      transform: "rotate(-45deg)",
      top: "calc(50% - 1px)",
    },
    "&:last-child": {
      transform: "rotate(45deg)",
      bottom: "calc(50% - 1px)",
    },
  },
};

export const mobileMenu = {
  width: "100%",
  backgroundColor: "tertiary.main",
  height: "calc(100vh - 70px)",
  position: "fixed",
  transition: "all .3s ease-in-out",
  left: 0,
  zIndex: 99,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "2.8rem",
  flexDirection: "column",
};

export const sendLink = {
  position: "relative",
  height: "42px",
  width: "42px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  mx: "auto",
  my: "28px",
};

export const linkBg = {
  backgroundColor: "secondary.main",
  opacity: 0.1,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
