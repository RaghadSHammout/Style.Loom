import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import { CtaData } from "./data/CtaData";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen  text-white dark:bg-primarybg dark:text-white">
      <NavBar />
      <HeroSection />
      <Outlet />

      {/* for footer CTA */}
      <CallToAction
        heading={CtaData.heading}
        text={CtaData.text}
        image={CtaData.image}
        alt={CtaData.alt}
      />

      <Footer />
    </div>
  );
}

export default App;
