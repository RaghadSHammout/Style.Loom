import type { FilterTabsProps } from "../types"


export default function FilterTabs({ tabs, onChange, activeTab, type }: FilterTabsProps) {
    return (
        <div className="FilterTabs flex items-center gap-[10px] lg:gap-[14px] overflow-x-auto scroll-smooth w-full">
            {
                tabs.map((tab) => {
                    return (
                        <button
                            key={tab}
                            onClick={() => onChange(tab)}
                            className={`px-[20px] lg:px-[24px] rounded-[12px] font-normal text-sm lg:text-lg  leading-[150%] font-robotmono
                                 ${type === 'Hero' ? 'py-[12px] lg:py-[14px]' : 'py-[14px] lg:py-[18px]'}
                                  ${activeTab === tab
                                    ? "px-[24px] lg:px-[30px] text-primarybg bg-brown-70"
                                    : " border border-dashed border-dark-20 text-gray-70"
                                }`}>
                            {tab}
                        </button>
                    )
                })
            }
        </div >
    )
}
