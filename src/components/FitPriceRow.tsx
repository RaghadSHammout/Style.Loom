import type { FitPriceRowProps } from "../types";


export default function FitPriceRow({ label, value }: FitPriceRowProps) {
    return (
        <div className="flex items-center gap-[6px] md:gap-[4px] 2xl:gap-[8px] font-robotmono">
            <p className=" font-normal text-sm 2xl:text-lg leading-[150%] dark:text-gray-50 text-dark-20">{label}</p>
            <div className="ShapeCircle w-[4px] h-[4px] rounded-[50%] bg-dark-30"></div>
            <p className="font-medium text-sm md:text-base 2xl:text-xl leading-[150%] dark:text-gray-80 textdark-30 ">{value}</p>
        </div>
    )
}
