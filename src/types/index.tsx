export interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
    type?: "Hero";
    onChange: (tab: string) => void;
}
export interface ReusableSectionprops extends Partial<FilterTabsProps> {
    image?: string;
    alt?: string;
    imgwidth?:string;
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
    title : string
    btn: string
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