import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import RoadMap from "./components/RoadMap.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
