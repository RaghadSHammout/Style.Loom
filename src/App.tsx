import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import { CtaData } from "./data/CtaData";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen  dark:bg-primarybg dark:text-white">
      <NavBar />
      <Outlet />
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
