import { MdArrowOutward } from "react-icons/md";
import type { ReusableSectionTwo } from "../types";

export default function ReusableSectionTwo({title , btn , children} :ReusableSectionTwo ) {
  return (
    <section className="border-2 border-dashed border-dark-20 rounded-[20px] 2xl:mt-[100px] sm:mt-20">
      <div className="p-[30px] sm:p-[50px] border-b-2 border-dashed border-dark-20 flex items-center justify-start sm:justify-between flex-wrap flex-col sm:flex-row">
        <h3 className="font-roboto font-medium text-white text-xl sm:text-2xl 2xl:text-3xl mb-5 sm:b-0">{title}</h3>
        <button className="relative flex items-center justify-center gap-x-1 font-roboto font-normal text-sm 2xl:text-lg text-white border border-dashed border-Very-Dark-Gray bg-dark-12 2xl:px-6 2xl:py-[18px] sm:px-5 sm:py-[14px] py-3.5 rounded-xl w-full sm:w-fit"
            >{btn} <MdArrowOutward />
            <span className="absolute w-[16.5px] h-[16.5px] border-t border-l border-[#AE9B84] rounded-tl-lg -top-0 -left-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-t border-r border-[#AE9B84] rounded-tr-lg -top-0 -right-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-b border-l border-[#AE9B84] rounded-bl-lg -bottom-0 -left-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-b border-r border-[#AE9B84] rounded-br-lg -bottom-0 -right-0" />
        </button>
      </div>
      <div>{children}</div>
    </section>
  )
}
