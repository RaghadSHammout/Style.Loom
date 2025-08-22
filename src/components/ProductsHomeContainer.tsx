import ProductHomeCard from "./productHomeCard";
import type { ProductCardProps } from "../types";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
export default function ProductsHomeContainer({
  products,
}: {
  products: ProductCardProps[];
}) {
  const [showProducts, setShowProducts] = useState<boolean>(false);
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

  const functionshowProducts = () => {
    setShowProducts((prev) => !prev);
  };
  // Determine which testimonials to display based on pagination
  const displayedProducts =
    isMobile && !showProducts
      ? products.slice(0, 3)
      : products.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
  const displayedProductsInMobile =
    isMobile && !showProducts ? products.slice(0, 3) : products;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        {(!isMobile ? displayedProducts : displayedProductsInMobile).map(
          (product, index) => (
            <ProductHomeCard
              key={product.id}
              product={product}
              index={index}
              productsLength={products.length}
            />
          )
        )}
      </div>

      {!isMobile && products.length > itemsPerPage && (
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

      <div className="sm:hidden text-gray-70 flex flex-row items-center justify-center font-robotmono px-[20px] py-[30px]">
        <button
          className="flex flex-row items-center justify-center text-base font-normal"
          onClick={functionshowProducts}
        >
          {showProducts ? "View Less" : "View All"}
          <span className="ml-[10px] text-sm">
            {showProducts ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </button>
      </div>
    </div>
  );
}
