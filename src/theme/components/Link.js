const Link = (theme) => ({
  MuiLink: {
    defaultProps: { underline: "none" },
    styleOverrides: {
      root: {
        cursor: "pointer",
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
    },
  },
});

export default Link;
