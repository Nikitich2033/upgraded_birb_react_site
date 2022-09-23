const Accordion = (theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        background: "transparent",
        color: theme.palette.secondary.main,
        borderBottom: "1.33px solid #FFF !important",
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: "43px 0 20px 0 !important",
        "& .MuiAccordionSummary-content": {
          marginLeft: "0 !important",
          fontSize: "2rem",
        },
        "&::before": {
          content: "''",
          width: "20px",
          height: "2px",
          display: "block !important",
          backgroundColor: "#fff",
          position: "absolute",
          right: "1rem !important",
          top: "4.5rem",
          transition: "transform 0.3s ease",
        },
        "&::after": {
          content: "''",
          width: "20px",
          height: "2px",
          backgroundColor: "#fff",
          position: "absolute",
          right: "1rem",
          top: "4.5rem",
          transition: "transform 0.3s ease",
          transform: "rotate(-90deg)",
        },
        "&[aria-expanded=true]::after": {
          transform: "rotate(0deg) !important",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: "0 0 24px 0 !important",
        fontWeight: 300,
        fontSize: "20px",
        lineHeight: 1.2,
        color: "#fff",
        maxWidth: "727px",
      },
    },
  },
});

export default Accordion;
