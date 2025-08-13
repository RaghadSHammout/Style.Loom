import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductsCardsData } from "../../data/ProductsCardsData";
import type { FilterType, ProductState } from "../../types";

const initialState: ProductState = {
    allProducts: ProductsCardsData,
    activeType: "Womens" as FilterType,
    filteredProducts: ProductsCardsData
        .filter(product => product.type === "Womens")
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6),
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setActiveType(state, action: PayloadAction<FilterType>) {
            state.activeType = action.payload;

            if (action.payload === "All") {
                state.filteredProducts = state.allProducts;
            } else {
                const filtered = state.allProducts
                    .filter(product => product.type === action.payload)
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    )
                    .slice(0, 6);

                state.filteredProducts = filtered;
            }
        },
    },
});

export const { setActiveType } = productSlice.actions;
export default productSlice.reducer;