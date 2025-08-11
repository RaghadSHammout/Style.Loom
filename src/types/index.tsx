export type TabUnionType = FilterType | FilterFaqType;
export interface FilterTabsProps<T extends string> {
    tabs: T[];
    activeTab: T;
    type?: "Hero";
    onChange: (tab: T) => void;
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
export type ProductType = "Womens" | "Mens" | "Kids";
export type FilterType = ProductType | "All";
export type FaqType = "Ordering" | "Shipping" | "Returns" | "Support";
export type FilterFaqType = FaqType | "All";


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
export interface ReusableSectionprops<T extends string = string> extends Partial<FilterTabsProps<T>> {
    image?: string;
    alt?: string;
    imgwidth?: string;
    text?: string;
    heading: string;
    showTabs?: boolean;
    children?: React.ReactNode;
}
export interface CallToActionProps {
    heading: string;
    text: string;
    image: string;
    alt: string;

}