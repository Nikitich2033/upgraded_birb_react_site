const Button = (theme) => ({
  MuiButton: {
    defaultProps: { size: "medium" },
    styleOverrides: {
      root: {
        fontFamily: [
          "Montserrat",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ].join(","),
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        fontWeight: 700,
        letterSpacing: 0,
        borderRadius: "99px",
        transition: "all .4s ease-in-out",
        backgroundImage: "linear-gradient(60deg,#fff 50%,transparent 0)",
        backgroundPosition: "100%",
        backgroundSize: "400%",
        position: "relative",
        "&:hover": {
          backgroundPosition: 0,
        },

        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity .3s,border .3s",
          borderRadius: "99px",
        },
        "&:hover:before": { opacity: 0 },
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          border: "3px solid #e6e6e6",
          opacity: 0,
          zIndex: 1,
          transform: "scaleX(1.1) scaleY(1.3)",
          transition: "transform .3s,opacity .3s",
          borderRadius: "99px",
          boxSizing: "border-box",
        },
        "&:hover::after": {
          opacity: 1,
          transform: "scaleX(1) scaleY(1)",
        },
      },
    },
    variants: [
      {
        props: { color: "secondary" },
        style: {
          height: "6rem",
          padding: "0 2.5rem",
          fontSize: "1rem",
          backgroundImage: "linear-gradient(60deg,#02060e 50%,transparent 0)",
          "&:hover": {
            color: "#FFF",
          },
          "&::after": { border: "3px solid #02060e" },
        },
      },
      {
        props: { size: "lg" },
        style: {
          height: "6rem",
          padding: "0 2.5rem",
          fontSize: "1rem",
        },
      },
      {
        props: { size: "medium" },
        style: {
          height: "4rem",
          padding: "0 1.875rem",
          fontSize: "0.875rem",
        },
      },
      {
        props: { size: "small" },
        style: {
          height: "2.25rem",
          padding: "0 1rem",
          fontSize: "0.5rem",
          fontWeight: 500,
        },
      },
    ],
  },
});

export default Button;
