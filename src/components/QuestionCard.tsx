import { type FAQ } from "../types";
import { motion } from 'framer-motion';
interface QuestionCardProps {
  index: number;
  faq: FAQ;
  length: number; // length is a number
}
function QuestionCard({ index, faq, length }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`hover:translate-1.5 hover:shadow-xl/30 hover:border-transparent cursor-pointer flex flex-col justify-center 2xl:p-[60px] xl:p-[50px] p-[30px] border-2 border-dark-15 border-dashed
                 ${index % 2 === 0
          ? "border-t-0 border-l-0 sm:border-r-2 border-r-0"
          : "border-t-0 border-l-0 sm:border-r-0 border-r-0"
        }
              
              ${(() => {
          if (length % 2 === 0) {
            //Even length
            return index === length - 1 || index === length - 2
              ? "sm:border-b-0"
              : "sm:border-b-2";
          } else {
            //Odd length
            return index === length - 1
              ? "sm:border-b-0"
              : "sm:border-b-2";
          }
        })()}
              `}
    >
      <div className="dark:text-white text-primarybg 2xl:text-2xl xl:text-xl text-lg font-medium">
        {faq.question}
      </div>
      <div className="text-gray-50 font-normal 2xl:mt-[40px] xl:mt-[30px] mt-[25px] 2xl:text-lg xl:text-base text-sm">
        {faq.answer}
      </div>
    </motion.div>
  );
}

export default QuestionCard;
