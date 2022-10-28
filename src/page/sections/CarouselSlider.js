import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";

// import BirdImg from "../../assets/bird.jpg";
import Bird1 from "../../assets/334.png";
import Bird2 from "../../assets/524.png";
import Bird3 from "../../assets/854.png";
import Bird4 from "../../assets/7380.png";
import Bird5 from "../../assets/7506.png";
import { bounceUpsettings } from "../../components/lib/animations";

const data = [
  {
    src: Bird1,
    name: "#334",
    id: 4073,
  },
  {
    src: Bird2,
    name: "#524",
    id: 6376,
  },
  {
    src: Bird3,
    name: "#854",
    id: 7240,
  },
  {
    src: Bird4,
    name: "#7380",
    id: 1524,
  },
  {
    src: Bird5,
    name: "#7506",
    id: 1524,
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
                src= {value.src}         //{Bird1}
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
                  variant="h1"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {value.name}
                </Typography>
                {/* <Typography
                  textAlign="center"
                  color="primary.main"
                  variant="body2"
                >
                  TUD #{value.id}
                </Typography> */}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </motion.div>
  );
};

export default CarouselSlider;
