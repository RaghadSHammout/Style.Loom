import { BsArrowUpRight } from "react-icons/bs";
import Line1 from "../assets/images/home/Line1.png";
import Line2 from "../assets/images/home/Line2.png";
import Line3 from "../assets/images/home/Line3.png";
import Line4 from "../assets/images/home/Line4.png";
import { NavLink } from "react-router-dom";
interface ShopNowButtonProps {
  hasBorder: boolean;
}
function ShopNowButton({ hasBorder }: ShopNowButtonProps) {
  return (
    <NavLink
      to={"#"}
      className={`relative flex flex-row items-center justify-center 2xl:w-[159px] 2xl:h-[63px] w-[128px] h-[49px] bg-dark-12 rounded-xl text-sm 2xl:text-lg font-roboto cursor-pointer ${
        hasBorder ? "border border-Very-Dark-Gray border-dashed" : "border-0"
      }`}
    >
      Shop Now
      <div className="pl-[6px]">
        <BsArrowUpRight />
      </div>
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
          alt="Line1"
        />
      )}
      {hasBorder && (
        <img
          className="absolute top-full -translate-y-full right-[-1px]"
          src={Line3}
          alt="Line1"
        />
      )}
      {hasBorder && (
        <img
          className="absolute top-full -translate-y-full left-[-1px]"
          src={Line4}
          alt="Line1"
        />
      )}
    </NavLink>
  );
}

export default ShopNowButton;
