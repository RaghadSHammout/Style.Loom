import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import CallToAction from "./components/CallToAction"
import { CtaData } from './data/CtaData';
import HeroSection from "./components/HeroSection"
function App() {

  return (
    <div className="dark:bg-primarybg min-h-screen dark:text-white">
      <NavBar/>  
      <HeroSection />
      <Outlet /> 
{/* for foter CTA */}
    <CallToAction heading={CtaData.heading} text={CtaData.text}  image={CtaData.image} alt={CtaData.alt}/>
    </div>
  )
}

export default App
