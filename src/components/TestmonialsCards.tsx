import lines1 from "../assets/images/home/Design lines1.webp";
import lines2 from "../assets/images/home/Design lines2.webp";
import lines3 from "../assets/images/home/Design lines3.webp";
import lines4 from "../assets/images/home/Design lines4.webp";
import iconTwitter from "../assets/images/home/ELEMENTS.webp";
import starts from "../assets/images/home/Container.webp";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { motion } from 'framer-motion';
function TestmonialsCards() {
  const { testmonials } = useSelector((state: RootState) => state.testmonials);
  const [showTestimonials, setShowTestimonials] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const resizeWindow = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  const functionShowTestimonials = () => {
    setShowTestimonials((prev) => !prev);
  };
  // Determine which Testimonials to display based on pagination
  const displayedTestimonials =
    isMobile && !showTestimonials
      ? testmonials.slice(0, 3)
      : testmonials.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
  const displayedTestmonialsInMobile =
    isMobile && !showTestimonials ? testmonials.slice(0, 3) : testmonials;
  const pageCount = Math.ceil(testmonials.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  return (
    <div
      className="relative font-roboto "
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        {(!isMobile ? displayedTestimonials : displayedTestmonialsInMobile).map(
          (testmonial, index) => {
            const isWidthMore1024 =
              index === 0 || index % 3 === 0
                ? "lg:border-l-0 lg:border-r-0 lg:border-t-0"
                : "lg:border-t-0 lg:border-r-0 lg:border-l-2";
            const inWidthLess1024More640 =
              index % 2 === 0
                ? "sm:border-l-0 sm:border-t-0 sm:border-r-2"
                : "sm:border-l-0 sm:border-t-0 sm:border-r-0";
            const isWidthLessThan640 = "border-t-0 border-l-0 border-r-0";
            const noBorderBInLast3Item =
              index === testmonials.length - 1 ||
                index === testmonials.length - 2 ||
                index === testmonials.length - 3
                ? "lg:!border-b-0"
                : "";
            const noBorderBInLast2Item =
              index === testmonials.length - 1 ||
                index === testmonials.length - 2
                ? "sm:!border-b-0"
                : "";
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                className={`hover:translate-1.5 hover:shadow-xl/30 hover:border-transparent cursor-pointer flex flex-col justify-center 2xl:h-[358px] lg:h-[312px] 2xl:p-[60px] xl:p-[50px] p-[30px] border-2 border-dark-15 border-dashed
                ${isWidthMore1024} ${inWidthLess1024More640} ${isWidthLessThan640} ${noBorderBInLast3Item} ${noBorderBInLast2Item}
               `}
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
                      <div className="dark:text-white text-primarybg font-medium 2xl:text-xl xl:text-lg text-base">
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
              </motion.div>
            );
          }
        )}
      </div>

      {!isMobile && testmonials.length > itemsPerPage && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center p-[30px] space-x-1"}
          pageClassName={
            "pagination-item px-4 py-2 border-1 font-roboto border-dark-15 border-dashed cursor-pointer rounded hover:bg-brown-70 hover:border-0"
          }
          pageLinkClassName={"px-0 py-0"}
          previousClassName={"pagination-item flex justify-center"}
          previousLinkClassName={
            "px-4 py-2 border-1 font-roboto border-dark-15 border-dashed cursor-pointer rounded hover:bg-brown-70 hover:border-0"
          }
          nextClassName={"pagination-item flex justify-center"}
          nextLinkClassName={
            "px-4 py-2 border-1 font-roboto border-dark-15 border-dashed cursor-pointer rounded hover:bg-brown-70 hover:border-0"
          }
          breakClassName={"pagination-item"}
          breakLinkClassName={
            "px-4 py-2 font-roboto border-dark-15 border-dashed rounded"
          }
          activeClassName={"!border-0 bg-brown-70 text-white"}
        />
      )}
      <div className="absolute right-0 lg:top-[312px] 2xl:top-[358px] -translate-y-[50%] lg:block hidden">
        <img src={lines1} alt="lines1" />
        <img src={lines2} alt="lines2" />
      </div>
      <div className="absolute left-0 lg:top-[312px] 2xl:top-[358px] -translate-y-[50%] lg:block hidden">
        <img src={lines3} alt="lines3" />
        <img src={lines4} alt="lines4" />
      </div>
      <div className="sm:hidden text-gray-70 flex flex-row items-center justify-center font-robotmono px-[20px] py-[30px]">
        <button
          className="flex flex-row items-center justify-center text-base font-normal"
          onClick={functionShowTestimonials}
        >
          {showTestimonials ? "View Less" : "View All"}
          <span className="ml-[10px] text-sm">
            {showTestimonials ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </button>
      </div>
    </div>
  );
}

export default TestmonialsCards;
