import { useSelector } from "react-redux"
import Cards, { ShowImageType } from "../components/Cards"

function Contact() {
  
 const Card3 = useSelector(((state: any) => state.cards.cardthree))
  return (
    <div>
      <div className="flex flex-wrap justify-center">
       {Array.isArray(Card3) &&
        Card3.slice(0 , 3).map((item , index) => (
          <Cards
          key={index}
          index = {index}
          showimage = {ShowImageType.three}
         img={item.img}
          title={item.title}
          description={item.description}
     />
        ))  
      }
     </div>
      <div className="flex flex-wrap justify-center">
       {Array.isArray(Card3) &&
        Card3.slice(3 , 6).map((item , index) => (
          <Cards
          key={index}
          index = {index}
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

export default Contact