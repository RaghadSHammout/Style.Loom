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

//I am nour i added this interfaces to define the array of questions in questions section
export interface FAQ {
  id: number;
  categorey: string;
  question: string;
  answer: string;
}

export interface QuestionsCardsProps {
  filteredFaqs: FAQ[]; // Define the prop as an array of FAQ
}
///////////////////////////////////////////////////////////////////////////////////////////

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
}

export interface ProductState {
  allProducts: Product[];
  activeType: FilterType;
  filteredProducts: Product[];
}

export interface ReusableSectionprops<T extends string = string>
  extends Partial<FilterTabsProps<T>> {
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
}
