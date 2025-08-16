import FilterTabs from "./FilterTabs";
import type { ReusableSectionprops } from "../types";

function ReusableSection<T extends string = string>({
  image,
  text,
  heading,
  tabs,
  activeTab,
  onChange,
  showTabs,
  alt,
  imgwidth,
  children,
}: ReusableSectionprops<T>) {
  return (
    <section className="border-2 border-dashed border-dark-15">
      <div
        className={`relative flex flex-col w-full gap-[50px] rotate-0 opacity-100 max-lg:overflow-x-auto max-lg:scroll-smooth 
        border-b-2 border-dashed border-dark-15 pt-20 overflow-hidden
        pr-[300px] pb-20 pl-20
        max-2xl:gap-10
        max-2xl:pt-[60px]
        max-2xl:pr-[250px]
        max-2xl:pb-[60px] max-2xl:pl-[60px] max-lg:gap-[30px]  max-lg:pt-[30px] max-lg:pr-[20px] max-lg:pb-[30px] max-lg:pl-[20px] `}
      >
        <div className={`font-robotom flex flex-col gap-[30px] max-2xl:gap-6 max-lg:gap-5`}>
          <h2 className="font-medium text-5xl leading-[100%] tracking-normal uppercase max-2xl:text-[38px] max-lg:text-[28px]">
            {heading}
          </h2>
          <p className="text-gray-40 font-normal text-lg leading-[150%] tracking-normal max-2xl:text-base max-lg:text-sm">
            {text}
          </p>
        </div>

        {image && (
          <div className="absolute right-0 top-0 overflow-hidden max-lg:hidden">
            <img src={image} alt={alt} className={`overflow-hidden ${imgwidth}`} />
          </div>
        )}

        {showTabs && activeTab && tabs && onChange && (
          <FilterTabs tabs={tabs} activeTab={activeTab} onChange={onChange} />
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}

export default ReusableSection;
