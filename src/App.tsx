import { useState } from "react"
import FilterTabs from "./components/FilterTabs"
import { ProductTabsData } from "./components/data/FilterTabsData"
import NavBar from "./components/NavBar"

function App() {
  const [activeTab , setActiveTab] = useState("All")
  return (
    <div className="bg-primarybg min-h-screen text-white">
            <NavBar/>  

      <FilterTabs 
      tabs={ProductTabsData} 
       activeTab={activeTab}
       onChange={(tab)=>  setActiveTab(tab)}
       />
    </div>
  )
}

export default App
