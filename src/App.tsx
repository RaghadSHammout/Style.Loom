import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div className="bg-primarybg min-h-screen text-white">
      <NavBar/>  
      <HeroSection />
      <Outlet /> 
    </div>
  )
}

export default App
