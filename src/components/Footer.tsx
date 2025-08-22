import InfinitScroll from './InfinitScroll'
import { FooterColumnData, FooterMediaData, InfinitScrollData } from '../data/FooterData'
import FooterMedia from './FooterMedia'
import LogoSvg from './LogoSvg'
import FooterColumn from './FooterColumn'

export default function () {
  return (
    <footer className='border-1 sm:border-[1.5px] 2xl:border-2 border-dashed border-dark-15'>
      <InfinitScroll contentsBar={InfinitScrollData} />
      <div className=" flex flex-wrap items-center justify-between gap-[30px] border-1 sm:border-[1.5px] 2xl:border-2 border-dashed border-dark-15 py-[50px] px-[16px] sm:p-[80px] 2xl:py-[100px] 2xl:px-[162px] ">
        <div className='text-black dark:text-white max-w[357px] sm:max-w[630px] 2xl:max-w[788.31px] h-fit'>
          <LogoSvg />
        </div>
        <FooterMedia
          AllMedia={FooterMediaData}
        />
      </div>

      <div className='flex flex-wrap items-center gap-[30px] sm:gap-[50px] 2xl:gap-[80px] border-1 sm:border-[1.5px] 2xl:border-2 border-dashed border-dark-15 py-[40px] px-[16px]  sm:py-[60px] sm:px-[80px] 2xl:py-[80px] 2xl:px-[162px]'>
        {
          FooterColumnData.map((column) => {
            return (
              <FooterColumn
                {...column}
              />
            )
          })
        }
        <div className='flex-1 basis-[300px]'>
          <FooterColumn
            ColumnLink='Subscribe to Newsletter'
            isSubscrbe={true}
          />
        </div>

      </div>
      <div className="px-[162px] py-[50px] max-2xl:px-[80px] max-2xl:py-[40px] max-md:px-[16px] max-md:py-[30px] flex justify-between max-md:flex-col max-md:items-start max-md:gap-[20px]">
        <p className='text-(--color-gray-40) text-[18px] xl:text-[14px]'>© 2024 StyleLoom.   All rights reserved.</p>
        <ul className="flex">
          <li className="text-(--color-gray-40) text-[18px] xl:text-[14px]">Terms & Conditions <span className='text-[var(--color-dark-15)] px-[10px]'>|</span></li>
          <li className="text-(--color-gray-40) text-[18px] xl:text-[14px]" >Privacy Policy</li>
        </ul>
      </div>
    </footer>
  )
}
