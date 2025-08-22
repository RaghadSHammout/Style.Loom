import { BsArrowUpRight } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import Line1 from "../assets/images/home/Line1.png";
import Line2 from "../assets/images/home/Line2.png";
import Line3 from "../assets/images/home/Line3.png";
import Line4 from "../assets/images/home/Line4.png";
import { NavLink } from "react-router-dom";

interface ShopNowButtonProps {
  hasBorder: boolean;
  hasFullWidthInCard: boolean;
  hasFullWidthInCallsection: boolean;
  inHeroSection?: boolean;
  hasDarkBack: boolean;
  arrowIcon: boolean;
  largerWidth: boolean;
  shopBagIcon: boolean;
}

function ShopNowButton({
  hasBorder,
  hasFullWidthInCard,
  hasFullWidthInCallsection,
  inHeroSection,
  hasDarkBack,
  arrowIcon,
  largerWidth,
  shopBagIcon,
}: ShopNowButtonProps) {
  const widthClass = inHeroSection
    ? "w-[128px]"
    : hasFullWidthInCard
    ? "w-full"
    : hasFullWidthInCallsection
    ? "lg:w-[128px] w-full"
    : "w-[128px]";

  const hasBorderClass = hasBorder
    ? "border border-Very-Dark-Gray border-dashed hover:border-0"
    : "border-0";
  const backgroundClass = hasDarkBack
    ? "dark:bg-dark-12 bg-white dark:text-white"
    : "bg-brown-70 text-primarybg";
  const largerWidthClass = largerWidth
    ? "2xl:w-[181px] sm:w-[134px] w-[149px]"
    : hasFullWidthInCallsection
    ? "lg:w-[128px] w-full"
    : "2xl:w-[159px] sm:w-[128px]";

  return (
    <NavLink
      to="#"
      className={`relative flex flex-row items-center justify-center hover:bg-brown-70 hover:text-primarybg hover:border border-Very-Dark-Gray border-dashed 2xl:h-[63px] h-[49px] rounded-xl text-sm 2xl:text-lg font-normal font-roboto cursor-pointer
        ${hasBorderClass}
        ${widthClass} ${backgroundClass} ${largerWidthClass} `}
    >
      {shopBagIcon && (
        <div className="pr-[10px] text-base">
          <IoBagHandleSharp />
        </div>
      )}
      Shop Now
      {arrowIcon && (
        <div className="pl-[6px]">
          <BsArrowUpRight />
        </div>
      )}
      {hasBorder && (
        <img
          className="absolute top-[-1px] left-[-1px]"
          src={Line1}
          alt="Line1"
        />
      )}
      {hasBorder && (
        <img
          className="absolute top-[-1px] right-[-1px]"
          src={Line2}
          alt="Line2"
        />
      )}
      {hasBorder && (
        <img
          className="absolute top-full -translate-y-full right-[-1px]"
          src={Line3}
          alt="Line3"
        />
      )}
      {hasBorder && (
        <img
          className="absolute top-full -translate-y-full left-[-1px]"
          src={Line4}
          alt="Line4"
        />
      )}
    </NavLink>
  );
}

export default ShopNowButton;
