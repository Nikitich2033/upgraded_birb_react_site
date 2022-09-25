import { Container, HeroSectionText } from "../components";
import WhoIsTudy from "./sections/whoIsTudySection";
import CarouselSlider from "./sections/CarouselSlider";
import RoadMap from "./sections/RoadMap";
import Team from "./sections/Team";
import FollowUs from "./sections/FollowUsSection";
import QASection from "./sections/QASection";
//import BuyOnBinance from "./sections/BuyOnBinance";

const Home = () => {
  return (
    <Container>
      <HeroSectionText />
      <WhoIsTudy />
      <CarouselSlider />
      <RoadMap />
      <Team />
      <FollowUs />
      <QASection />
      {/* <BuyOnBinance /> */}
    </Container>
  );
};

export default Home;
