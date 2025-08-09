import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import Cards, { ShowImageType } from "../components/Cards";
import ReusableSection from "../components/ReusableSection";
import {
  sectionData,
  sectionData1,
  sectionData2,
  sectionData3,
  sectionData4,
} from "../data/ReusableSectionData";
function Home() {
  const Card = useSelector((state: any) => state.cards.cardone);
  const Card2 = useSelector((state: any) => state.cards.cardtwo);
  const [showbtn, setshowbtn] = useState<boolean>(false);
  const [numbercard, setnumbercard] = useState<number>(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setshowbtn(true);
        setnumbercard(3);
      } else {
        setshowbtn(false);
        setnumbercard(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showallcards = () => {
    if (numbercard === 3) {
      setnumbercard(6);
    } else {
      setnumbercard(3);
    }
  };

  return (
      // انا عاطية بادينغ للقياس1920 ل home
    <div className="pr-[162px] pl-[162px]">
      <ReusableSection {...sectionData1}>
        <div className="flex flex-wrap justify-center">
          {Array.isArray(Card) &&
            Card.slice(0, numbercard).map((item, index) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.one}
                img={item.img}
                img2={item.img2}
                title={item.title}
                description={item.description}
              />
            ))}

          {showbtn && (
            <button
              className="text-gray-70 border border-dashed border-dark-20 py-[30px] px-[125.5px] w-full flex items-center justify-center gap-x-2.5 transition-all"
              onClick={showallcards}
            >
              View All
              <IoIosArrowRoundDown
                className={`text-gray-70 transform transition-transform duration-500 ${
                  numbercard <= 3 ? "" : "rotate-180"
                } hover:translate-8`}
              />
            </button>
          )}
        </div>
      </ReusableSection>

      <ReusableSection {...sectionData2}>
        <div className="flex flex-wrap justify-center">
          {Array.isArray(Card2) &&
            Card2.map((item, index) => (
              <Cards
                key={index}
                index={index}
                showimage={ShowImageType.two}
                steps={item.steps}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </ReusableSection>
    </div>
  );
}

export default Home;
