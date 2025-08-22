import { ShowImageType, type CardsProps } from "../types";
import { motion } from 'framer-motion';

function Cards({ img, img2, title, description, showimage, steps, index, className }: CardsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`  hover:translate-1.5 hover:shadow-xl/30 cursor-pointer
        ${className}
      ${showimage === ShowImageType.one ? "p-[30px] sm:p-[50px] 2xl:p-[60px]  overflow-hidden" : ""}
      ${showimage === ShowImageType.two ? 'p-[30px] sm:p-10  2xl:p-[50px] ' : ''}
      ${showimage === ShowImageType.three ? 'flex items-center gap-x-5 p-5 sm:p-[30px] 2xl:p-10 ' : ''}
      ${showimage === ShowImageType.one && index !== undefined && index < 3 ? " xl:border-b-2  border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.one && index !== undefined && index < 4 ? " md:border-b-2 xl:border-b-0 border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.one && index !== undefined && index < 5 ? " border-b-2 md:border-b-0 border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.one && index !== undefined && (index === 1 || index === 3 || index === 5) ? "md:border-l-2 xl:border-l-0 border-dashed border-dark-15 " : ""}
      ${showimage === ShowImageType.one && index !== undefined && (index === 1 || index === 2 || index === 4 || index === 5) ? "xl:border-l-2  border-dashed border-dark-15 " : ""}
      ${showimage === ShowImageType.two && index !== undefined && (index === 1 || index === 2 || index === 3) ? "xl:border-l-2 border-dashed border-dark-15 " : ""}
      ${showimage === ShowImageType.two && index !== undefined && index < 3 ? " border-b-2 md:border-b-0 border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.two && index !== undefined && (index === 1 || index === 3) ? " md:border-l-2 xl:border-l-0 border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.two && index !== undefined && (index === 0 || index === 1) ? " md:border-b-2 xl:border-b-0 border-dashed border-dark-15" : ""}
      ${showimage === ShowImageType.three && index !== undefined && (index === 0 || index === 1) ? "sm:border-r-2 border-b-2 xl:border-b-0 border-dashed border-dark-15 " : ""}
      `}
    >
      <div className="flex relative">
        {(showimage === ShowImageType.one || showimage === ShowImageType.three) &&
          <img src={img} alt="icon" className="mb-6 sm:mb-10 2xl:mb-[50px] w-[76px] h-[76px] 2xl:w-[94px] 2xl:h-[94px]" />}
        {showimage === ShowImageType.one &&
          <img
            src={img2}
            alt="background image"
            className="absolute right-[-30px] sm:right-[-50px] 2xl:right-[-60px] top-[-57px] sm:top-[-67px] 2xl:top-[-60px] w-[184px]"
          />
        }
      </div>
      <div>
        {showimage === ShowImageType.two &&
          <p className="font-normal font-robotmono text-[16px] sm:text-lg 2xl:text-xl text-gray-40 mb-5 sm:mb-6 2xl:mb-[30px]">
            {steps}
          </p>
        }

        <h3
          className={`font-roboto font-medium dark:text-white text-primarybg mb-2.5 sm:mb-3 2xl:mb-[16px] leading-[150%] ${(showimage === ShowImageType.one || showimage === ShowImageType.three) ? 'text-lg sm:text-xl 2xl:text-2xl ' : ""}
            ${showimage === ShowImageType.two ? 'text-xl sm:text-[22px] 2xl:text-[28px]' : ''}`}
        >
          {title}
        </h3>
        <p className="font-roboto font-normal text-sm sm:text-[16px] 2xl:text-lg text-gray-50 leading-[150%]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Cards;
