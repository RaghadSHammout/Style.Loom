import lines1 from "../assets/images/home/Design lines1.webp";
import lines2 from "../assets/images/home/Design lines2.webp";
import lines3 from "../assets/images/home/Design lines3.webp";
import lines4 from "../assets/images/home/Design lines4.webp";
import iconTwitter from "../assets/images/home/ELEMENTS.webp";
import starts from "../assets/images/home/Container.webp";
import { FaArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState } from "react";
function TestmonialsCards() {
  const { testmonials } = useSelector((state: RootState) => state.testmonials);
  const [showTestmonials, setShowTestmonials] = useState<boolean>(false);
  return (
    <div className="relative font-roboto">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        {testmonials.slice(0, 1).map((testmonial, id) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed sm:border-r-2 border-r-0 border-t-0 border-l-0 lg:border-b-0 border-b-0"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}
        {testmonials.slice(1, 2).map((testmonial, id) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed lg:border-r-2 border-r-0 sm:border-t-0 border-t-2 border-l-0 lg:border-b-2 sm:border-b-0 border-b-2"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}
        {testmonials.slice(2, 3).map((testmonial, id) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed lg:border-r-0 sm:border-r-2 border-r-0 border-l-0 lg:border-b-0 sm:border-b-2 border-b-0  lg:border-t-0 sm:border-t-2 border-t-0"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}

        {testmonials.slice(3, 4).map((testmonial, id) => {
          return (
            <div
              key={id}
              className={`sm:flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed lg:border-r-2 border-r-0 border-b-0 border-l-0 border-t-2 ${
                showTestmonials === true ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}
        {testmonials.slice(4, 5).map((testmonial, id) => {
          return (
            <div
              key={id}
              className={`sm:flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed sm:border-t-0 border-t-2 border-b-0 border-l-0 border-r-0 ${
                showTestmonials === true ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}
        {testmonials.slice(5, 6).map((testmonial, id) => {
          return (
            <div
              key={id}
              className={`sm:flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border border-dark-15 border-dashed sm:border-l-2 border-l-0 border-b-0 border-r-0 border-t-2 ${
                showTestmonials === true ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <img
                      className="2xl:w-[80px] 2xl:h-[80px] xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full"
                      src={testmonial.image}
                      alt="member photo"
                    />
                  </div>
                  <div className="ml-[12px]">
                    <div className="text-white font-medium 2xl:text-xl xl:text-lg text-base">
                      {testmonial.name}
                    </div>
                    <div className="mt-[4px] text-gray-40 font-normal 2xl:text-lg xl:text-base text-sm">
                      {testmonial.country}
                    </div>
                  </div>
                </div>
                <div>
                  <img src={iconTwitter} alt="iconTwitter" />
                </div>
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px]">
                <img src={starts} alt="starts" />
              </div>
              <div className="2xl:mt-[40px] xl:mt-[30px] mt-[25px] text-gray-50 2xl:text-lg xl:text-base text-sm">
                {testmonial.desc}
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute right-0 top-[50%] -translate-y-[50%] lg:block hidden">
        <img src={lines1} alt="lines1" />
        <img src={lines2} alt="lines2" />
      </div>
      <div className="absolute left-0 top-[50%] -translate-y-[50%] lg:block hidden">
        <img src={lines3} alt="lines3" />
        <img src={lines4} alt="lines4" />
      </div>
      <div className="sm:hidden text-gray-70 flex flex-row items-center justify-center font-robotmono px-[20px] py-[30px] border-t-2 border-dark-15 border-dashed">
        <button
          className="flex flex-row items-center justify-center text-base font-normal"
          onClick={() => {
            setShowTestmonials(!showTestmonials);
          }}
        >
          View All
          <span className="ml-[10px] text-sm">
            <FaArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TestmonialsCards;
