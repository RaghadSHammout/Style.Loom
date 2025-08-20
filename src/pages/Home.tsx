import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import Cards from "../components/Cards";
import ReusableSection from "../components/ReusableSection";
import TestmonialsCards from "../components/TestmonialsCards";
import QuestionsCards from "../components/QuestionsCards";
import HeroSection from "../components/HeroSection";

import {
  baseSectionData,
  sectionData1,
  sectionData2,
  sectionData3,
  baseFaqData,
} from "../data/ReusableSectionData";
import { ShowImageType } from "../types";

import type { RootState } from "../redux/store";
import type { FilterType } from "../types";
import { setActiveType } from "../redux/slices/productSlice";
import { ProductTabsData } from "../data/FilterTabsData";
import ProductCard from "../components/ProductCard";
import type { FilterFaqType } from "../types";
import { tabsFaq } from "../data/FilterTabsData";
import { setActiveTab } from "../redux/questions";
function Home() {
  const cardOne = useSelector((state: RootState) => state.cards.cardone);
  const Card2   = useSelector((state: RootState) => state.cards.cardtwo);

  const [showbtn, setshowbtn] = useState<boolean>(false);
  const [numbercard, setnumbercard] = useState<number>(6);

  //For FAQ section
  const faqDispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.faq.activeTab);
  const filteredFaqs = useSelector(
    (state: RootState) => state.faq.filteredFaqs
  );

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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showallcards = () => {
    setnumbercard((prev) => (prev === 3 ? 6 : 3));
  };

  const dispatch = useDispatch();
  const activeType = useSelector(
    (state: RootState) => state.product.activeType
  );
  const filteredProducts = useSelector(
    (state: RootState) => state.product.filteredProducts
  );

  const sectionData = {
    ...baseSectionData,
    tabs: ProductTabsData,
    activeTab: activeType,
    onChange: (tab: FilterType) => dispatch(setActiveType(tab)),
    showTabs: true,
  };
  //Question Section
  const sectionData4 = {
    ...baseFaqData,
    tabs: tabsFaq,
    activeTab,
    onChange: (tab: FilterFaqType) => faqDispatch(setActiveTab(tab)),
  };
  return (
    <div className="2xl:px-[162px] lg:px-[80px] px-[16px] pt-[183.8px] max-2xl:pt-[137px] max-md:pt-[146px]">
      <HeroSection />
      <ReusableSection {...sectionData1}>

        <div className="flex flex-wrap justify-center">
          {cardOne.slice(0, numbercard).map((item, index) => (
            <Cards
              key={item.id ?? index}
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
              className="text-gray-70 border border-dashed border-dark-20 py-[30px]  w-full flex items-center justify-center gap-x-2.5 transition-all"
              onClick={showallcards}
            >
              {numbercard <= 3 ? " View All" : " less All"}
             
              <IoIosArrowRoundDown
                className={`text-gray-70 transform transition-transform duration-500 ${
                  numbercard <= 3 ? "" : "rotate-180"
                } hover:translate-8`}
              />
            </button>
          )}
        </div>
      </ReusableSection>

      {/* القسم 2 */}
      <ReusableSection {...sectionData2}>
        {/* <div className="flex flex-wrap justify-center"> */}
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2">
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

      {/* Products */}
      <ReusableSection {...sectionData}>
        <div className="grid grid-cols-1 my-media:grid-cols-2 2xl:grid-cols-3 gap-[0] place-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </ReusableSection>

      {/* Testimonials */}
      <ReusableSection {...sectionData3}>
        <TestmonialsCards />
      </ReusableSection>
      <ReusableSection {...sectionData4}>
        <QuestionsCards filteredFaqs={filteredFaqs} />
      </ReusableSection>
    </div>
  );
}
export default Home;
