import { useState, useEffect } from "react";
import ShopNowButton from "./ShopNowButton";
import { PiPlusBold } from "react-icons/pi";
import { PiPercentBold } from "react-icons/pi";
import heroImage from "../assets/images/home/hero-img.webp";
function HeroSection() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secNumber, setSecNumber] = useState<number>(0);
  const tabsArray = [
    { name: "All" },
    { name: "Mens" },
    { name: "Womens" },
    { name: "Kids" },
  ];

  useEffect(() => {
    const dynamicFirstNum = setInterval(() => {
      setFirstNumber((prevNumber) => {
        return prevNumber < 1500 ? prevNumber + 1 : 0;
      });
    }, 100);
    const dynamicSecNum = setInterval(() => {
      setSecNumber((prevNumber) => {
        return prevNumber < 50 ? prevNumber + 1 : 0;
      });
    }, 100);
    return () => {
      clearInterval(dynamicFirstNum);
      clearInterval(dynamicSecNum);
    };
  }, []);
  return (
    <div className="2xl:px-[162px] lg:px-[80px] px-[16px]">
      <div className="flex flex-col items-center justify-center relative">
        <img
          className="2xl:h-[624px] lg:h-[442px] md:h-[300px] h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]"
          src={heroImage}
          alt="Hero Image"
        />
        <div className="flex flex-row items-center justify-center 2xl:w-[198px] 2xl:h-[101px] lg:w-[165px] lg:h-[80px] w-[145px] h-[65px] rounded-tl-[20px] rounded-tr-[20px] bg-primarybg absolute lg:top-[95%] md:top-[93%] top-[90%]">
          <ShopNowButton hasBorder={true} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 bg-primarybg w-full border border-Very-Dark-Gray border-t-0 border-dashed rounded-bl-[20px] rounded-br-[20px]">
        <div className="2xl:px-[80px] xl:px-[60px] lg:px-[40px] px-[20px] sm:py-[80px] pt-[50px] pb-[20px] sm:border-r-1 sm:border-b-0 border-b-1 border-Very-Dark-Gray border-dashed">
          <div className="flex flex-row lg:gap-6 md:gab-4 gap-3">
            {tabsArray.map((tab, index) => (
              <div
                className="text-gray-70 md:text-lg text-sm font-normal border border-Very-Dark-Gray border-dashed xl:rounded-[12px] rounded-[8px] lg:px-[16px] lg:py-[10px] px-[10px] py-[8px] min-w-[30px] flex items-center justify-center cursor-pointer font-robotmono"
                key={index}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="text-white 2xl:text-5xl lg:text-4xl text-[28px] font-medium uppercase 2xl:mt-[30px] lg:mt-[20px] mt-[16px] font-roboto">
            Elevate Your Style with StyleLoom
          </div>
          <div className="text-gray-40 2xl:text-lg xl:text-base text-[12px] font-normal 2xl:mt-[30px] lg:mt-[20px] mt-[16px] font-roboto">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </div>
        </div>
        <div className="grid grid-cols-2 font-roboto">
          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-r border-b border-Very-Dark-Gray border-dashed">
            <div className="flex flex-row items-center justify-center text-white">
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
          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-b border-Very-Dark-Gray border-dashed">
            <div className="flex flex-row items-center justify-center text-white">
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
          <div className="flex flex-col justify-center items-start lg:px-[50px] px-[30px] 2xl:py-[65px] lg:py-[55px] py-[40px] border-r border-Very-Dark-Gray border-dashed">
            <div className="flex flex-row items-center justify-center text-white">
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
            <div className="flex flex-row items-center justify-center text-white">
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
