export interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
    type?: "Hero";
    onChange: (tab: string) => void;
}
export interface ProductCardProps {
    ProductImage: string;
    category: string;
    ProductName: string;
    Fitvalue: string;
    Pricevalue: string

}
export interface FitPriceRowProps {
    label: string;
    value: string
}
export type ProductType = "Woman" | "Man" | "Kids";
export type FilterType = ProductType | "All";

export interface Product {
    id: number;
    type: ProductType;
    ProductImage: string;
    category: string;
    ProductName: string;
    Fitvalue: string;
    Pricevalue: string;
    createdAt: string;
}

export interface ProductState {
    allProducts: Product[];
    activeType: FilterType;
    filteredProducts: Product[];
}