import ActionButton from "./ActionButton";
import ArrowImg from "../assets/images/Arrow.svg"
import ArrowBottom from "../assets/images/ArrowBottom.svg"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import type { productsContainerProps } from "../types";



export default function ProductsContainer({ category, products }: productsContainerProps) {
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
    const toggleAction = () => setShowAll(prev => !prev);

    return (
        <div className="productsContainer flex flex-col ">
            <div className="flex justify-between items-center p-[24px] 2xl:p-[30px]">
                <h2 className="font-medium text-2xl sm:text-[26px] 2xl:text-3xl leading-[100%] font-roboto text-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0] place-items-center items-stretch border-y-[1.5px] 2xl:border-y-2 brder-dashed border-dark-15">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} {...product}
                     />
                ))}

            </div>
            <div className="block sm:hidden">
                <ActionButton
                    Label={toggleLabel}
                    IconImage={ArrowBottom}
                    hasFullWidth={true}
                    hasNoBorder={true}
                    onClick={toggleAction}
                />

            </div>
        </div>
    )
}
