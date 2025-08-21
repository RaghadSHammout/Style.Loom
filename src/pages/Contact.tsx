import { useSelector } from "react-redux"
import Cards from "../components/Cards"
import ReusableSectionTwo from "../components/ReusableSectionTwo"
import { ShowImageType } from "../types"
import CardContact from "../components/CardContact"
import {sectionContactData} from "../data/ReusableSectionData";
import ReusableSection from "../components/ReusableSection"

function Contact() {
  const Card3 = useSelector(((state: any) => state.cards.cardthree))
  const contact = useSelector(((state : any) => state.CardContact.list))
  return (
    <section className="2xl:px-[162px] lg:px-[80px] px-[16px]">
      <ReusableSection {...sectionContactData}>
        <h3 className="hidden sm:block p-10 2xl:p-[50px] font-roboto font-medium text-2xl 2xl:text-3xl dark:text-white text-primarybg border-b-2 border-dashed border-dark-15">Contact Information</h3>
      <div className="grid grid-cols-1  xl:grid-cols-3 md:grid-cols-2">
        {
          Array.isArray(contact) && 
          contact.map((item , index , arr) => (
             <CardContact
             key={index}
             index={item.id}
             img = {item.imgone}
             img2= {item.imgtwo}
             title={item.title}
             btn= {item.infobtn}
             className={
          arr.length === 3 && index === 2 
            ? "md:col-span-2 xl:col-span-1"
            : ""
            }
        /> 
          ))
        }
      </div>
      </ReusableSection>
    <div >
      <ReusableSectionTwo
        title="Return Policy"
        btn="Read Return Policy">
        <div className="grid grid-cols-1  xl:grid-cols-3 md:grid-cols-2">
          {Array.isArray(Card3) &&
            Card3.slice(0, 3).map((item, index, arr) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.three}
                img={item.img}
                title={item.title}
                description={item.description}
                  className={
          arr.length === 3 && index === 2 
            ? "md:col-span-2 xl:col-span-1"
            : ""
            }
              />
            ))
          }
        </div>
      </ReusableSectionTwo>
      <ReusableSectionTwo
        title="Cancellation Policy"
        btn="Read Cancellation Policy ">
        <div className="grid grid-cols-1  xl:grid-cols-3 md:grid-cols-2">
          {Array.isArray(Card3) &&
            Card3.slice(3, 6).map((item, index , arr) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.three}
                img={item.img}
                title={item.title}
                description={item.description}
                  className={
              arr.length === 3 && index === 2 
            ? "md:col-span-2 xl:col-span-1"
            : ""
            }
              />
            ))
          }
        </div>
      </ReusableSectionTwo>
    </div>

  
    </section>
  )
}

export default Contact