import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="bg-primarybg min-h-screen text-white">
            <NavBar/>  
      <Outlet /> 
    </div>
  )
}

export default App
