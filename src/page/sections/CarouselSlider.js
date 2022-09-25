import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";

import BirdImg from "../../assets/bird.jpg";
import { bounceUpsettings } from "../../components/lib/animations";

const data = [
  {
    name: "Orange Mafia",
    id: 4073,
  },
  {
    name: "Ugly Pantera",
    id: 6376,
  },
  {
    name: "Cactus Duck",
    id: 7240,
  },
  {
    name: "D-Easy",
    id: 1524,
  },
  {
    name: "Metaturismo",
    id: 7517,
  },
  {
    name: "Yellow Tuddy",
    id: 8389,
  },
  {
    name: "Yoyager Classic",
    id: 431,
  },
  {
    name: "Shadow",
    id: 3821,
  },
  {
    name: "Digi Digi Boy",
    id: 9708,
  },
  {
    name: "Fire Air",
    id: 2405,
  },
];

const CarouselSlider = () => {
  const [selected, setSelected] = React.useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <motion.div {...bounceUpsettings}>
      <Box sx={{ px: { md: "64px", xs: "30px" } }}>
        <Slider {...settings} beforeChange={(_, x) => setSelected(x)}>
          {data.map((value, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity:
                  selected + 1 === index ||
                  (index === 0 && selected === data.length - 1)
                    ? 1
                    : 0.5,
                transform:
                  selected + 1 === index ||
                  (index === 0 && selected === data.length - 1)
                    ? "scale(1.1)"
                    : "scale(0.75)",
                transition: "all .5s ease-in-out",
              }}
            >
              <Box
                key={index}
                component="img"
                alt="tudy"
                src={BirdImg}
                sx={{
                  margin: "0 auto",
                  padding: "0 0.25rem",
                  borderRadius: "30%",
                  overflow: "hidden",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
              <Box
                sx={{
                  marginTop: "1rem",
                  transition: "all .5s ease-in-out",
                  opacity:
                    selected + 1 === index ||
                    (index === 0 && selected === data.length - 1)
                      ? 1
                      : 0,
                }}
              >
                <Typography
                  textAlign="center"
                  color="secondary.main"
                  variant="h5"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {value.name}
                </Typography>
                <Typography
                  textAlign="center"
                  color="primary.main"
                  variant="body2"
                >
                  TUD #{value.id}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </motion.div>
  );
};

export default CarouselSlider;
