import type { ProductCardProps } from "../types";
import FitPriceRow from "./FitPriceRow";


export default function ProductCard({ ProductImage, category, ProductName, Fitvalue, Pricevalue }: ProductCardProps) {
    return (
        <div className="ProductCard flex flex-col 2xl:gap-[30px] max-w-[358px] md:max-w-[426.67px] 2xl:max-w-[532px] px-[20px] pt-[20px] pb-[30px] 2xl:p-[30px] border-b-[1px] md:border-r-[1.5px] 2xl:border-r-2 border-dashed border-dark-15">
            <img src={ProductImage} alt="ProductImage" className="w-full" />
            <div className="flex flex-col gap-[20px] md:gap-[16px] 2xl:gap-[20px]">
                <div className="flex justify-between items-center ">
                    <p className="category py-[8px] px-[12px] 2xl:py-[10px] 2xl:px-[16px] rounded-[100px] border border-dashed border-dark-15 bg-dark-10 font-normal text-sm 2xl:text-lg leading-[150%] text-gray-70">
                        {category}
                    </p>
                </div>
                <div className="flex flex-col gap-[10px] 2xl:gap-[14px]">
                    <h4 className="font-medium text-lg 2xl:text-2xl leading-[150%] text-white ">{ProductName}</h4>
                    <div className="flex gap-[10px] md:gap-[16] 2xl:gap-[20px]">
                        <FitPriceRow
                            label="Fit"
                            value={Fitvalue}
                        />
                        <FitPriceRow
                            label="Price"
                            value={Pricevalue}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
