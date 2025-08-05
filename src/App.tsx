import { useSelector } from "react-redux"
import Cards , {ShowImageType} from "./components/Cards"
import { useEffect, useState } from "react";

function App() {
   const Card = useSelector(((state: any) => state.cards.cardone))
   const Card2 = useSelector(((state: any) => state.cards.cardtwo))
   const Card3 = useSelector(((state: any) => state.cards.cardthree))
   const [showbtn , setshowbtn] = useState<boolean >(false)
   const [numbercard , setnumbercard]= useState<number> (6)
  useEffect(() => {
    const handleResize = () => {
       if(window.innerWidth <= 600){
      setshowbtn(true)
      setnumbercard(3)
      console.log(true)
    }
    else{
        setshowbtn(false)
        setnumbercard(6)
        }
        };
    handleResize()
    window.addEventListener ("resize" , handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
  };
    },[])
    
 
  const showallcards = () =>{
    if(numbercard == 3){
      setnumbercard(6)
    }
    else{
      setnumbercard(3)
    }
  }
  return (
    <div className="bg-primarybg min-h-screen text-white">
     <div className="flex flex-wrap justify-center">
       {Array.isArray(Card) &&
        Card.slice(0 , numbercard).map((item , index) => (
          <Cards
          key={index}
          showimage = {ShowImageType.one}
          img={item.img}
          img2={item.img2}
          title={item.title}
          description={item.description}
     />
        ))  
      }
      {showbtn && <button className="text-gray-70 border border-dashed border-dark-20  py-[30px] px-[125.5px] w-full"
      onClick={() => showallcards() }
      >View All</button>}
     </div>
     <div className="flex flex-wrap justify-center">
       {Array.isArray(Card2) &&
        Card2.map((item , index) => (
          <Cards
          key={index}
          showimage = {ShowImageType.two}
          steps={item.steps}
          title={item.title}
          description={item.description}
     />
        ))  
      }
     </div>
     <div className="flex flex-wrap justify-center">
       {Array.isArray(Card3) &&
        Card3.map((item , index) => (
          <Cards
          key={index}
          showimage = {ShowImageType.three}
         img={item.img}
          title={item.title}
          description={item.description}
     />
        ))  
      }
     </div>
    </div>
  )
}

export default App
