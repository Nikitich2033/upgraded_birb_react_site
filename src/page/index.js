import { Container, HeroSectionText } from "../components";
import WhoIsBirb from "./sections/whoIsBirbSection";
import CarouselSlider from "./sections/CarouselSlider";
import RoadMap from "./sections/RoadMap";
import Team from "./sections/Team";
import FollowUs from "./sections/FollowUsSection";
import QASection from "./sections/QASection";
import { useState } from 'react';


const Home = () => {
  const [accounts, setAccounts] = useState([]);
  return (
    <Container accounts={accounts} setAccounts={setAccounts} >
      <HeroSectionText accounts={accounts} setAccounts={setAccounts}/>
      <WhoIsBirb />
      <CarouselSlider />
      <RoadMap />
      <Team />
      <FollowUs />
      <QASection />
      
    </Container>
  );
};

export default Home;
