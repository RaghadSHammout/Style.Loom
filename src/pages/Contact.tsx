import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import ReusableSectionTwo from "../components/ReusableSectionTwo";
import { ShowImageType } from "../types";
import CardContact from "../components/CardContact";
import { sectionContactData } from "../data/ReusableSectionData";
import ReusableSection from "../components/ReusableSection";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import type { RootState } from "../redux/store";

function Contact() {
  const Card3 = useSelector((state: RootState) => state.cards.cardthree);
  const contact = useSelector((state: RootState) => state.CardContact.list);

  return (
    <PageTransitionWrapper>
      <section className="pt-[223px] max-lg:pt-[185px] max-md:pt-[166px] pb-[100px] max-lg:pb-[80px] max-md:pb-[50px] 2xl:px-[162px] lg:px-[80px] px-[16px]">

        <ReusableSection {...sectionContactData}>
          <h3 className="hidden sm:block p-10 2xl:p-[50px] font-roboto font-medium text-2xl 2xl:text-3xl dark:text-white text-primarybg border-b-2 border-dashed border-dark-15">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {Array.isArray(contact) &&
              contact.map((item: any, index: number, arr: any[]) => (
                <CardContact
                  key={index}
                  index={item.id}
                  img={item.imgone}
                  img2={item.imgtwo}
                  title={item.title}
                  btn={item.infobtn}
                  className={
                    arr.length === 3 && index === 2
                      ? "md:col-span-2 xl:col-span-1"
                      : ""
                  }
                />
              ))}
          </div>
        </ReusableSection>

        <div>
          <ReusableSectionTwo title="Return Policy" btn="Read Return Policy">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Array.isArray(Card3) &&
                Card3.slice(0, 3).map((item: any, index: number, arr: any[]) => (
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
                ))}
            </div>
          </ReusableSectionTwo>

          <ReusableSectionTwo
            title="Cancellation Policy"
            btn="Read Cancellation Policy "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {Array.isArray(Card3) &&
                Card3.slice(3, 6).map((item: any, index: number, arr: any[]) => (
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
                ))}
            </div>
          </ReusableSectionTwo>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}

export default Contact;
