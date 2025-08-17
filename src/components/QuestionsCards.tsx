import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import QuestionCard from "./QuestionCard";
import ReactPaginate from "react-paginate";
import { type QuestionsCardsProps } from "../types";

function QuestionsCards({ filteredFaqs }: QuestionsCardsProps) {
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

  // Determine which FAQs to display based on pagination
  const displayedFaqs =
    isMobile && !showTestimonials
      ? filteredFaqs.slice(0, 3)
      : filteredFaqs.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );

  const pageCount = Math.ceil(filteredFaqs.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="relative font-roboto">
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {displayedFaqs.map((faq, index) => (
          <QuestionCard
            key={index}
            faq={faq}
            length={filteredFaqs.length}
            index={index}
          />
        ))}
      </div>

      {filteredFaqs.length > itemsPerPage && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-center p-[30px] space-x-1"}
          pageClassName={"pagination-item px-4 py-2 border-1 font-roboto border-dark-15 border-dashed cursor-pointer rounded hover:bg-brown-70 hover:border-0"}
          pageLinkClassName={
            "px-0 py-0"
          }
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

export default QuestionsCards;
