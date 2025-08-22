import { useParams } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export default function ProductOpen() {
    const { id } = useParams();
    const product = useSelector((state: RootState) =>
        state.product.allProducts.find(p => p.id === Number(id))
    );
    return (
        <PageTransitionWrapper>
<div className="pt-[223px] max-lg:pt-[185px] max-md:pt-[166px] pb-[100px] max-lg:pb-[80px] max-md:pb-[50px] 2xl:px-[162px] lg:px-[80px] px-[16px]">
                {product && <ProductDetails {...product} />}

            </div>
        </PageTransitionWrapper>
    )
}
