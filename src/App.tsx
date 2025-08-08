import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
// import CallToAction from "./components/CallToAction"
// import { CtaData } from './data/CtaData';
function App() {
  return (
    <div className="bg-primarybg min-h-screen text-white">
      <NavBar/>  
      <Outlet /> 
{/* for foter CTA */}
{/* 
    <CallToAction heading={CtaData.heading} text={CtaData.text}  image={CtaData.image} alt={CtaData.alt}/> */}

    </div>
  )
}

export default App
