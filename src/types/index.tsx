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