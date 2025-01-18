import Hero from "./components/Hero";
import HeroChooseUs from "./components/HeroChooseus";
import HeroOurServices from "./components/heroOurServices";
import HeroPlan from "./components/HeroPlan";
import HeroOurteam from "./components/HeroOurteam";
const HomeHero = () => {
  return (
    <>
      <Hero />
      <HeroOurServices />
      <HeroPlan />
      <HeroChooseUs />
      <HeroOurteam />
    </>
  );
};

export default HomeHero;
