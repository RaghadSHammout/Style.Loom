import { useState, useEffect } from "react";
import ShopNowButton from "./ShopNowButton";
import { PiPlusBold, PiPercentBold } from "react-icons/pi";
import heroImage from "../assets/images/home/hero-img.webp";
import { useSelector, useDispatch } from "react-redux";
import { setHeroTab } from "../redux/HeroTabs";
import type { RootState } from "../redux/store";
import type { FilterType } from "../types";
import FilterTabs from "./FilterTabs";
function HeroSection() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secNumber, setSecNumber] = useState<number>(0);
  const dispatch = useDispatch();
  const activeTab = useSelector(
    (state: RootState) => state.heroSlice.activeTab
  );
  const tabDetails = useSelector(
    (state: RootState) => state.heroSlice.tabDetails
  );

  useEffect(() => {
    const dynamicFirstNum = setInterval(
      () => setFirstNumber((p) => (p < 1500 ? p + 1 : 0)),
      100
    );
    const dynamicSecNum = setInterval(
      () => setSecNumber((p) => (p < 50 ? p + 1 : 0)),
      100
    );
    return () => {
      clearInterval(dynamicFirstNum);
      clearInterval(dynamicSecNum);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center relative">
        <img
          className="2xl:h-[624px] lg:h-[442px] md:h-[300px] h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]"
          src={heroImage}
          alt="Hero Image"
        />
        <div className="flex flex-row items-center justify-center 2xl:w-[198px] 2xl:h-[101px] lg:w-[165px] lg:h-[80px] w-[145px] h-[65px] rounded-tl-[20px] rounded-tr-[20px] dark:bg-primarybg bg-white absolute lg:top-[95%] md:top-[93%] top-[90%]">
          <ShopNowButton
            hasBorder={true}
            hasFullWidthInCard={false}
            hasFullWidthInCallsection={false}
            hasDarkBack={true}
            inHeroSection={true}
            arrowIcon={true}
            shopBagIcon={false}
            largerWidth={false}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 w-full border-2 border-dark-15 border-t-0 border-dashed rounded-bl-[20px] rounded-br-[20px]">
        <div className="2xl:px-[80px] xl:px-[60px] lg:px-[40px] lg:min-h-[450px] md:min-h-[420px] px-[20px] sm:py-[80px] pt-[50px] pb-[20px] sm:border-r-2 sm:border-b-0 border-b-2 border-dark-15 border-dashed">
          <div className="flex flex-row lg:gap-6 md:gab-4 gap-3">
            <FilterTabs<FilterType>
              tabs={["All", "Mens", "Womens", "Kids"]}
              activeTab={activeTab}
              onChange={(tab) => dispatch(setHeroTab(tab))}
              type="Hero"
            />
          </div>

          <div className="dark:text-white text-primarybg 2xl:text-5xl lg:text-4xl text-[28px] font-medium uppercase 2xl:mt-[30px] lg:mt-[20px] mt-[16px] font-roboto">
            {tabDetails[activeTab].title}
          </div>
          <div className="overflow-y-auto text-gray-40 2xl:text-lg xl:text-base text-[12px] font-normal 2xl:mt-[30px] lg:mt-[20px] mt-[16px] font-roboto">
            {tabDetails[activeTab].description}
          </div>
        </div>

        <div className="grid grid-cols-2 font-roboto">
          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-r-2 border-b-2 border-dark-15 border-dashed">
            <div className="flex flex-row items-center justify-center dark:text-white text-primarybg">
              <div className="2xl:text-[50px] lg:text-[34px] text-[30px] font-medium">
                {firstNumber}
              </div>
              <div className="lg:text-[30px] text-[20px] font-meduim ml-[10px]">
                <PiPlusBold />
              </div>
            </div>
            <div className="text-gray-40 font-normal 2xl:text-lg xl:text-base text-[12px]">
              Fashion Products
            </div>
          </div>
          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-b-2 border-dark-15 border-dashed">
            <div className="flex flex-row items-center justify-center dark:text-white text-primarybg">
              <div className="2xl:text-[50px] lg:text-[34px] text-[30px] font-medium">
                {secNumber}
              </div>
              <div className="lg:text-[30px] text-[20px] font-meduim ml-[10px]">
                <PiPlusBold />
              </div>
            </div>
            <div className="text-gray-40 font-normal 2xl:text-lg xl:text-base text-[12px]">
              New arrivals every month.
            </div>
          </div>

          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-r-2 border-dark-15 border-dashed">
            <div className="flex flex-row items-center justify-center dark:text-white text-primarybg">
              <div className="2xl:text-[50px] lg:text-[34px] text-[30px] font-medium">
                30
              </div>
              <div className="lg:text-[30px] text-[20px] font-meduim">
                <PiPercentBold />
              </div>
            </div>
            <div className="text-gray-40 font-normal 2xl:text-lg xl:text-base text-[12px]">
              OFF on select items.
            </div>
          </div>

          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px]">
            <div className="flex flex-row items-center justify-center dark:text-white text-primarybg">
              <div className="2xl:text-[50px] lg:text-[34px] text-[30px] font-medium">
                95
              </div>
              <div className="lg:text-[30px] text-[20px] font-meduim">
                <PiPercentBold />
              </div>
            </div>
            <div className="text-gray-40 font-normal 2xl:text-lg xl:text-base text-[12px]">
              Customer Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
