import ActionButton from "./ActionButton";
import Rating from "./Rating";
import AddIcon from "../assets/images/addToCart.svg";
import type { RowForProductDetailsProps } from "../types";



export default function RowForProductDetails({ isTitle, isFeature, Title, features, isLeftSide, SubTitle, isDescription, Description, isMaterial, MaterialImg, isPrice, Price, isAvialableSize, AvialableSize, isRating, isGab16 }: RowForProductDetailsProps) {
    return (
        <div className="py-[30px] px-[24px] md:py-[40px] md:px-[60px] 2xl:py-[50px] 2xl:px-[80px] border-b-[1.5px] 2xl:border-b-2 border-dashed border-dark-15 ">
            {
                isTitle && (
                    <div className="flex flex-col gap-[30px] md:gap-[40px] 2xl:gap-[50px]">
                        <h2 className="font-medium text-xl md:text-2xl 2xl:text-3xl leading-[100%] font-roboto dark:text-white text-dark-12">{Title}</h2>
                        {
                            isFeature && (
                                <ul className="list-disc pl-5  flex flex-col ">
                                    {features?.map((feature, index) => (
                                        <li key={index} className="font-normal text-sm md:text-base 2xl:text-lg  leading-[150%] font-roboto text-gray-50 ">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )
                        }

                    </div>


                )
            }
            {
                isLeftSide && (
                    <div className="flex flex-col gap-[20px] md:gap-[30px] 2xl:gap-[50px]">
                        <div className={`flex flex-col ${isGab16 ? "gap-[10px] md:gap-[12px] 2xl:gap-[16px]" : "gap-[12px] md:gap-[16px] 2xl:gap-[16px]"}`}>
                            <h4 className="font-medium text-base md:text-lg 2xl:text-xl leading-[100%] font-roboto dark:text-white text-dark-12">
                                {SubTitle}
                            </h4>
                            {
                                isDescription && (
                                    <p className="font-normal text-sm md:text-base 2xl:text-lg  leading-[150%] font-roboto text-gray-50">
                                        {Description}
                                    </p>
                                )
                            }
                            {
                                isPrice && (
                                    <div className="flex flex-wrap justify-between items-center gap-[20px] 2xl:gap-[50px]">
                                        <div className="flex flex-wrap items-center gap-[12px] 2xl:gap-[16px]">
                                            <p className="font-medium text-2xl 2xl:text-3xl leading-[150%] font-robotmono dark:text-white text-dark-12">
                                                {Price}
                                            </p>
                                            <p className="font-normal text-base 2xl:text-lg  leading-[150%] font-roboto text-gray-50">
                                                ( MRP incl. of all taxes )
                                            </p>
                                        </div>
                                        <ActionButton Label="Add To Cart" IconImage={AddIcon} hasFullWidth={true} hasNoBorder={false} />
                                    </div>

                                )
                            }
                            {
                                isAvialableSize && (
                                    <div className="flex flex-wrap items-center gap-[12px] 2xl:gap-[16px]">
                                        {
                                            AvialableSize?.map((size) => {
                                                return (
                                                    <p key={size} className="rounded-[100px] py-[6px] px-[20px] 2xl:py-[8px] 2xl:px-[34px] bg-dark-10 font-normal text-base 2xl:text-lg  leading-[150%] font-roboto text-white">
                                                        {size}
                                                    </p>

                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                        {
                            isMaterial && (
                                <img src={MaterialImg} alt="MaterialImg" className="w-full min-h-[175px] md:min-h-[311px] 2xl:min-h-[415px]" />

                            )
                        }
                    </div>
                )

            }
            {
                isRating && (
                    <Rating />
                )
            }
        </div>
    )
}
