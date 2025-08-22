import { Link } from "react-router-dom";
import type { ProductCardProps } from "../types";
import FitPriceRow from "./FitPriceRow";
import ShopNowButton from "./ShopNowButton";

//nour added index and productLength
interface productProp {
  index: number;
  productsLength: number;
  product: ProductCardProps;
}

function productHomeCard({ index, productsLength, product }: productProp) {
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
    index === productsLength - 1 ||
    index === productsLength - 2 ||
    index === productsLength - 3
      ? "lg:!border-b-0"
      : "";
  const noBorderBInLast2Item =
    index === productsLength - 1 || index === productsLength - 2
      ? "sm:!border-b-0"
      : "";
  return (
    <Link
      to={`/product/${product.id}`}
      className={`flex flex-row items-center justify-center 2xl:p-[30px] p-[20px] border-2 border-dark-15 border-dashed
          ${isWidthMore1024} ${inWidthLess1024More640} ${isWidthLessThan640} ${noBorderBInLast3Item} ${noBorderBInLast2Item}`}
    >
      <div className="ProductCard flex flex-col gap-[20px] md:gap-[24px] 2xl:gap-[30px] h-full w-full">
        <img
          src={product.ProductImage}
          alt="ProductImage"
          className="w-full rounded-t-[50px] 2xl:h-[386px] xl:h-[290px] h-[220px]"
        />
        <div className="flex flex-col gap-[20px] md:gap-[16px] 2xl:gap-[20px] w-full">
          <div className="flex justify-between items-center ">
            <p className="category py-[8px] px-[12px] 2xl:py-[10px] 2xl:px-[16px] rounded-[100px] border border-dashed border-dark-15 bg-dark-10 font-normal text-sm 2xl:text-lg leading-[150%] text-gray-70">
              {product.category}
            </p>
            <div className="hidden sm:block">
              <ShopNowButton
                hasBorder={true}
                hasFullWidthInCard={true}
                hasFullWidthInCallsection={false}
                hasDarkBack={true}
                inHeroSection={false}
                arrowIcon={true}
                shopBagIcon={false}
                largerWidth={false}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
            <h4 className="font-medium text-lg 2xl:text-2xl leading-[150%] dark:text-white text-primarybg">
              {product.ProductName}
            </h4>
            <div className="flex gap-[10px] md:gap-[16] 2xl:gap-[20px]">
              <FitPriceRow label="Fit" value={product.Fitvalue} />
              <FitPriceRow label="Price" value={product.Pricevalue} />
            </div>
          </div>
          <div className="block sm:hidden w-full">
            <ShopNowButton
              hasBorder={true}
              hasFullWidthInCard={true}
              hasFullWidthInCallsection={false}
              hasDarkBack={true}
              inHeroSection={false}
              arrowIcon={true}
              shopBagIcon={false}
              largerWidth={false}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default productHomeCard;
