import ActionButton from "./ActionButton";
import ArrowBottom from "../assets/images/ArrowBottom.svg"
import ProductCard from "./ProductCard";
import type { ProductCardProps } from "../types";
import { useEffect, useState } from "react";


export default function ProductsHomeContainer({ products }: { products: ProductCardProps[] }) {
    const [showAll, setShowAll] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        const checkScreen = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    const displayedProducts = isSmallScreen && !showAll ? products.slice(0, 3) : products;
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0] place-items-center items-stretch">
                {displayedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            {isSmallScreen && (
                <div className="block sm:hidden mt-4">
                    <ActionButton
                        Label={showAll ? "View Less" : "View All"}
                        IconImage={ArrowBottom}
                        hasFullWidth={true}
                        hasNoBorder={true}
                        onClick={() => setShowAll((prev) => !prev)}
                    />
                </div>
            )}
        </div>
    )
}
