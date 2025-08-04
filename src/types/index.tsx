export interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
    type?: "Hero";
    onChange: (tab: string) => void;
}