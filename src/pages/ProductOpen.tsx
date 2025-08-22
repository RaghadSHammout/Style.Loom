import { useParams } from "react-router-dom";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails";

export default function ProductOpen() {
    const { id } = useParams();
    const product = useSelector((state: RootState) =>
        state.product.allProducts.find(p => p.id === Number(id))
    );
    return (
        <div className="p-[16px] md:p-[80px] 2xl:p-[162px]">
            {product && <ProductDetails {...product} />}

        </div>
    )
}
