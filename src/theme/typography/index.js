

const typography = (theme) => ({
  ...theme.typography,
  h1: {
    fontWeight: 500,
    fontSize: "4.5rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
    [theme.breakpoints.down("md")]: {
      fontSize: "2.25rem",
    },
  },
  h2: {
    fontWeight: 500,
    fontSize: "2.25rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: "2rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: "1.625rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  h5: {
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
  },
  h6: {
    fontWeight: 500,
    fontSize: "1.7rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace', 
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    fontFamily: 'VT323, monospace',
  },
});

export default typography;
