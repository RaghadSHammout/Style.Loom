import { Outlet, useNavigation, ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import CallToAction from "./components/CallToAction";
import { CtaData } from "./data/CtaData";
import Footer from "./components/Footer";
import TopBarLoader from "./components/TopBarLoader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startCardOneListener } from "./services/cardoneListner";
import OutletWrapper from "./components/OutletWrapper";

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const maybeUnsub = startCardOneListener(dispatch) as unknown;
    return () => {
      if (typeof maybeUnsub === "function") {
        (maybeUnsub as () => void)();
      }
    };
  }, [dispatch]);

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    setShowBar(true);
    const t = window.setTimeout(() => setShowBar(false), 1500);
    return () => window.clearTimeout(t);
  }, [location.key]);

  useEffect(() => {
    if (navigation.state !== "idle") setShowBar(true);
  }, [navigation.state]);

  return (
    <div className="dark:bg-primarybg min-h-screen dark:text-white">
      {showBar && <TopBarLoader blur allowClicks={false} zIndexClass="z-[9999]" />}
      <NavBar />
        <OutletWrapper key={location.pathname}>
          <Outlet />
        </OutletWrapper>
      <CallToAction
        heading={CtaData.heading}
        text={CtaData.text}
        image={CtaData.image}
        alt={CtaData.alt}
      />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
