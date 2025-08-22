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
            <div className="p-[16px] md:p-[80px] 2xl:p-[162px]">
                {product && <ProductDetails {...product} />}

            </div>
        </PageTransitionWrapper>
    )
}
