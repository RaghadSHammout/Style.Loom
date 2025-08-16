import { useSelector } from "react-redux"
import Cards from "../components/Cards"
import ReusableSectionTwo from "../components/ReusableSectionTwo"
import { ShowImageType } from "../types"


function Contact() {

  const Card3 = useSelector(((state: any) => state.cards.cardthree))
  return (
    <div className="2xl:px-[162px] lg:px-[80px] px-[16px]">
      <ReusableSectionTwo
        title="Return Policy"
        btn="Read Return Policy">
        <div className="flex flex-wrap justify-center">
          {Array.isArray(Card3) &&
            Card3.slice(0, 3).map((item, index) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.three}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </div>
      </ReusableSectionTwo>
      <ReusableSectionTwo
        title="Cancellation Policy"
        btn="Read Cancellation Policy ">
        <div className="flex flex-wrap justify-center">
          {Array.isArray(Card3) &&
            Card3.slice(3, 6).map((item, index) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.three}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </div>
      </ReusableSectionTwo>
    </div>
  )
}

export default Contact