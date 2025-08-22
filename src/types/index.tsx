
export interface FilterTabsProps<T extends string> {
    tabs: T[];
    activeTab: T;
    type?: "Hero";
    onChange: (tab: T) => void;
}
export interface ProductCardProps {
    id: number;
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

export type TabUnionType = FilterType | FilterFaqType;

export interface FaqItem {
    id: number;
    categorey: FaqType;
    question: string;
    answer: string;
}

export interface FAQ {
    id: number;
    categorey: string;
    question: string;
    answer: string;
}

export interface QuestionsCardsProps {
    filteredFaqs: FAQ[];
}

export type TabDetail = { title: string; description: string };
export type TabDetailsMap = { [key in FilterType]: TabDetail };

export interface FilterTabsProps<T extends string = string> {
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
    Pricevalue: string;
    borderClass?: string; 
}

export interface FitPriceRowProps {
    label: string;
    value: string;
}

export interface Product {
    id: number;
    type: ProductType;
    ProductImage: string;
    category: string;
    ProductName: string;
    Fitvalue: string;
    Pricevalue: string;
    createdAt: string;
    designSummary: string;
    Status: string;
    image1: string;
    image2: string;
    image3: string;
    OriginStory: string;
    Materials: string;
    MaterialImg: string;
    features: string[];
    AvialableSize: string[];
}

export interface ProductState {
    allProducts: Product[];
    activeType: FilterType;
    filteredProducts: Product[];
    activeTypeForSections: FilterType;
    filteredSections: Section[];
}

export interface Section {
    category: string;
    products: ProductCardProps[];
    showAll: boolean;
}
export interface GroupedCategory {
    category: string;
    products: ProductCardProps[];
}

export interface ReusableSectionprops<T extends string = string>
  extends Partial<FilterTabsProps<T>> {
  image?: string;
  alt?: string;
  hight?: string;
  imgwidth?: string;
hight?: string;
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

export interface ReusableSectionTwo {
    title: string;
    btn: string;
    children: React.ReactNode;
}

export enum ShowImageType {
    one = "one",
    two = "two",
    three = "three",
}

export interface CardsProps {
    img?: string;
    img2?: string;
    title: string;
    description: string;
    showimage: ShowImageType;
    steps?: string;
    index?: number;
    className?: string;

}

export interface ActionButtonProps {
    Label: string;
    IconImage?: string;
    onClick?: () => void;
    hasFullWidth: boolean;
    hasNoBorder: boolean;

}
export interface RowForProductDetailsProps {
    isTitle?: boolean;
    isFeature?: boolean;
    Title?: string;
    features?: string[];
    isLeftSide?: boolean;
    SubTitle?: string;
    isDescription?: boolean;
    Description?: string;
    isMaterial?: boolean;
    MaterialImg?: string;
    isPrice?: boolean;
    Price?: string;
    isAvialableSize?: boolean;
    AvialableSize?: string[];
    isRating?: boolean;
    isGab16?: boolean;

}
export interface ProductDetailsProps {
    ProductName: string;
    designSummary: string;
    Status: string;
    image1: string;
    image2: string;
    image3: string;
    OriginStory: string;
    Materials: string;
    MaterialImg: string;
    features: string[];
    Pricevalue: string;
    AvialableSize: string[];

}
export interface productsContainerProps {
    category: string;
    products: ProductCardProps[];

}
export interface InfinitScrollProps {
    contentsBar: string[];
}
export interface FooterMediaProps {
    AllMedia: string[];

}
export interface FooterColumnProps {
    ColumnLink: string;
    items?: string[];
    isSubscrbe: boolean

}
