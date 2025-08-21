import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ProductsCardsData } from "../../data/ProductsCardsData";
import type { FilterType, ProductState } from "../../types";
import { groupByCategory } from "../../utils/groupByCategory";

const initialState: ProductState = {
    allProducts: ProductsCardsData,
    activeType: "Womens" as FilterType,
    filteredProducts: ProductsCardsData
        .filter(product => product.type === "Womens")
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6),
    activeTypeForSections: "Womens",
    filteredSections: [],
};
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //Reducer For Fitering in Home page
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
        //Reducer For Fitering in Proucts Page
        setFilteredSections(state, action: PayloadAction<FilterType>) {
            state.activeTypeForSections = action.payload;

            const products = action.payload === "All"
                ? state.allProducts
                : state.allProducts.filter(p => p.type === action.payload);
            const grouped = groupByCategory(products);

            state.filteredSections = grouped.map(group => ({
                category: group.category,
                products: group.products,
                showAll: false,
            }));
        }
    },
});
export const { setActiveType, setFilteredSections } = productSlice.actions;
export default productSlice.reducer;
