import Line1 from "../assets/images/home/Line1.png";
import Line2 from "../assets/images/home/Line2.png";
import Line3 from "../assets/images/home/Line3.png";
import Line4 from "../assets/images/home/Line4.png";
import type { ActionButtonProps } from "../types";


export default function ActionButton({ Label, IconImage, onClick, hasFullWidth, hasNoBorder }: ActionButtonProps) {
    return (
        <button
            className={`relative flex justify-center items-center gap-[4px] rounded-xl border-dashed border-Very-Dark-Gray  h-[49px] 2xl:h-[63px] cursor-pointer
                font-normal text-sm  2xl:text-lg leading-[150%] font-roboto 
                ${hasFullWidth ? "w-full sm:w-auto" : "w-auto"}
                ${hasNoBorder ? "py-[30px] px-[20px] gap-[10px] border-t-1 border-dark-20 text-gray-70" : "py-[14px] px-[20px] 2xl:py-[18px] 2xl:px-[24px] border bg-dark-12 text-white "}`}
            onClick={onClick}>
            <img src={IconImage} alt="IconImage" className="w-[20px] 2xl:w-[24px]" />
            {Label}
            {
                !hasNoBorder && (
                    <img
                        className="absolute top-[-1px] left-[-1px]"
                        src={Line1}
                        alt="Line1"
                    />

                )
            }
            {
                !hasNoBorder && (
                    <img
                        className="absolute top-[-1px] right-[-1px]"
                        src={Line2}
                        alt="Line1"
                    />

                )
            }
            {
                !hasNoBorder && (
                    <img
                        className="absolute top-full -translate-y-full right-[-1px]"
                        src={Line3}
                        alt="Line1"
                    />

                )
            }
            {
                !hasNoBorder && (

                    <img
                        className="absolute top-full -translate-y-full left-[-1px]"
                        src={Line4}
                        alt="Line1"
                    />

                )
            }





        </button>
    )
}
