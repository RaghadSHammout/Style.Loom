import ActionButton from "./ActionButton";
import ArrowImg from "../assets/images/Arrow.svg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { productsContainerProps } from "../types";

export default function ProductsContainer({
  category,
  products,
}: productsContainerProps) {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const wasSmall = windowWidth < 640;
      const isNowSmall = newWidth < 640;

      if (showAll && wasSmall !== isNowSmall) {
        setShowAll(false);
      }

      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, showAll]);

  const visibleCount = showAll
    ? products.length
    : windowWidth < 640
    ? 1
    : windowWidth < 1024
    ? 2
    : 3;

  const visibleProducts = products.slice(0, visibleCount);

  const toggleLabel = showAll ? "View Less" : "View All";
  const toggleAction = () => setShowAll((prev) => !prev);
  const functionshowProducts = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className="productsContainer flex flex-col ">
      <div className="flex justify-between items-center p-[24px] 2xl:p-[30px]">
        <h2 className="font-medium text-2xl sm:text-[26px] 2xl:text-3xl leading-[100%] font-roboto dark:text-white text-primarybg">
          {category}
        </h2>
        <div className="hidden sm:block">
          <ActionButton
            Label={toggleLabel}
            IconImage={ArrowImg}
            hasFullWidth={false}
            hasNoBorder={false}
            onClick={toggleAction}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0] items-center justify-center sm:border-b-2 border-b-0 border-y-2 2xl:border-y-2 border-dashed border-dark-15">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            productLength={visibleProducts.length}
          />
        ))}
      </div>
      <div className="sm:hidden border-b-2 border-dashed border-dark-15 text-gray-70 flex flex-row items-center justify-center font-robotmono px-[20px] py-[30px]">
        <button
          className="flex flex-row items-center justify-center text-base font-normal"
          onClick={functionshowProducts}
        >
          {showAll ? "View Less" : "View All"}
          <span className="ml-[10px] text-sm">
            {showAll ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </button>
      </div>
    </div>
  );
}
