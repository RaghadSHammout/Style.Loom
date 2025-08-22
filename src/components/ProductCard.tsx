import { Link } from "react-router-dom";
import type { ProductCardProps } from "../types";
import FitPriceRow from "./FitPriceRow";
import ShopNowButton from "./ShopNowButton";
import { motion } from 'framer-motion';


export default function ProductCard({ id, ProductImage, category, ProductName, Fitvalue, Pricevalue, borderClass }: ProductCardProps) {
    return (
        <Link to={`/product/${id}`} className="block" >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`ProductCard  hover:translate-1.5 hover:shadow-xl/30 ${borderClass ?? ''} hover:border-transparent  flex  flex-col gap-[20px] md:gap-[24px] 2xl:gap-[30px] h-full max-w-[358px] sm:max-w-[426.67px] 2xl:max-w-[532px]  px-[20px] pt-[20px] pb-[30px] 2xl:p-[30px] border-[1px] md:border-[1.5px] 2xl:border-2 border-dashed border-dark-15`}
            >
                <img src={ProductImage} alt="ProductImage" className="w-full" />
                <div className="flex flex-col gap-[20px] md:gap-[16px] 2xl:gap-[20px] w-full">
                    <div className="flex justify-between items-center ">
                        <p className="category py-[8px] px-[12px] 2xl:py-[10px] 2xl:px-[16px] rounded-[100px] border border-dashed border-dark-15 bg-dark-10 font-normal text-sm 2xl:text-lg leading-[150%] text-gray-70">
                            {category}
                        </p>
                        <div className="hidden sm:block">
                            <ShopNowButton
                                hasBorder={true}
                                hasFullWidthInCard={false}
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
                        <h4 className="font-medium text-lg 2xl:text-2xl leading-[150%] dark:text-white text-dark-12">{ProductName}</h4>
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
            </motion.div>
        </Link >
    )
}
