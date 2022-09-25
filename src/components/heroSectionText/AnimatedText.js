import React from "react";
import { motion } from "framer-motion";
import { Typography, useTheme, useMediaQuery,} from "@mui/material";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return (
    <span className="word-wrapper" style={props.style}>
      {props.children}
    </span>
  );
};

// Map API "type" vaules to JSX tag names

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  const theme = useTheme();
  const screenDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const item = {
    hidden: {
      y: "200%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word, index) => {
    if (index !== words.length - 1) return word.push("\u00A0");
    return word;
  });

  return (

    // <Box component="img" sx={ThickSpin} src={Image} alt="img" />
    <Typography
      sx={{
        fontSize: screenDownMd ? "4.5rem" : "12rem",
        lineHeight: 0.9,
        letterSpacing: "0",
        fontWeight: 700,
        textAlign: "center",
        color: "secondary.main",
      }}
      >
        
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{
                      display: "inline-block",
                      color: theme.palette.secondary.main,
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      <Wrapper style={{ verticalAlign: "text-top" }}>
        <Typography
          sx={{
            fontSize: screenDownMd ? "1rem" : "5rem",
            letterSpacing: "0",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1,
            color: "primary.main",
          }}
          component="sup"
        >
          <motion.span
            style={{
              display: "inline-block",
              color: theme.palette.primary.main,
            }}
            variants={item}
          >
            {props.superText}
          </motion.span>
        </Typography>
      </Wrapper>
    </Typography>
  );
};

export default AnimatedCharacters;
