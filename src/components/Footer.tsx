import footerVector from '../assets/images/home/footer-vector.png'
import instaIcon from '../assets/images/home/instgram.png'
import BeIcon from '../assets/images/home/Be.png'
import BasketIcon from '../assets/images/home/basket.png'
import twitterIcon from '../assets/images/home/twitter.png'
import logo from '../assets/images/home/Logo.png'
import arrow from '../assets/images/home/arrow.png'






export default function () {
  return (
    <>
      <footer>
        <div className="py-[50px] max-2xl:py-[40px] max-md:py-[30px] border-y-2 border-dashed custom-dash border-(--color-dark-15) py-4">
          <div className="overflow-x-auto hide-scrollbar">
            <ul className='flex flex-nowrap justify-between items-center gap-[16px] max-2xl:gap-[12px] max-md:py-[30px] whitespace-nowrap'>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between items-center font-normal gap-[12px] text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                TANK TOP
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                T-SHIRT
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                LONG-SLEEVE T-SHIRT
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                RAGLAN SLEEVE SHIRT
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                CROP TOP
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                V-NECK SHIRT
              </li>
              <img src={footerVector} alt="logo" className="w-[60px]  h-[60px] max-2xl:w-[50px] max-2xl:h-[50px] max-md:w-[40px] max-md:h-[40px]" />
              <li className='text-(--color-dark-20) justify-between gap-[12px] items-center font-normal text-[30px] max-2xl:text-[24px] max-md:text[20px] flex'>
                MUSCLE SHIRT
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-wrap max-2xl:gap-[30px] justify-between items-center border-b-2 border-dashed custom-dash border-(--color-dark-15) px-[162px] py-[100px] max-2xl:p-[80px] max-md:px-[16px] max-md:py-[50px]">
          <div className="logo">
            <img src={logo} alt="" className="w-auto h-auto max-2xl:w-[630px] max-2xl:h-[114px] max-md:w-[357px] max-md:h-[66px]" />
          </div>
          <div className="flex gap-[20px] max-2xl:gap-[10px]">
            <a href="#"><img className="p-[16px] max-2xl:p-[14px] rounded-[12px] h-full bg-(--color-brown-80)" src={instaIcon} alt="" /></a>
            <a href="#"><img className="p-[16px] max-2xl:p-[14px] rounded-[12px] h-full bg-(--color-brown-80)" src={BasketIcon} alt="" /></a>
            <a href="#"><img className="p-[16px] max-2xl:p-[14px] rounded-[12px] h-full bg-(--color-brown-80)" src={twitterIcon} alt="" /></a>
            <a href="#"><img className="p-[16px] max-2xl:p-[14px] rounded-[12px] h-full bg-(--color-brown-80)" src={BeIcon} alt="" /></a>
          </div>
        </div>

        <div className="border-b-2 border-dashed custom-dash border-(--color-dark-15) px-[162px] py-[80px] max-2xl:px-[80px] max-2xl:py-[60px] max-md:px-[16px] max-md:py-[40px] flex gap-[80px] max-2xl:gap-[50px] flex-wrap max-md:items-start justify-between">
          <div className="flex flex-col justify-center gap-[30px] max-2xl:gap-[24px]">
            <h3 className='font-medium text-[22px] max-2xl:text-[18px]'>Home</h3>
            <ul className='flex'>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px] text-(--color-gray-40)">Why Us <span className='text-[var(--color-dark-15)] px-[10px]'>•</span></li>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px]  text-(--color-gray-40)">About Us <span className='text-[var(--color-dark-15)] px-[10px]'>•</span></li>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px]  text-(--color-gray-40)">Testimonials <span className='text-[var(--color-dark-15)] px-[10px]'>•</span></li>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px]  text-(--color-gray-40)">FAQ’s</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-[30px] max-2xl:gap-[24px]">
            <h3 className='font-medium text-[22px] max-2xl:text-[18px]'>Products</h3>
            <ul className='flex'>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px] max-md:text-[14px] text-(--color-gray-40)">Menswear <span className='text-[var(--color-dark-15)] px-[10px]'>•</span></li>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px] max-md:text-[14px] text-(--color-gray-40)">Womenswear <span className='text-[var(--color-dark-15)] px-[10px]'>•</span></li>
              <li className="whitespace-nowrap text-[20px] max-2xl:text-[16px] max-md:text-[14px] text-(--color-gray-40)">Kidswear </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-[30px] max-2xl:gap-[24px] max-w-[479px] w-full">
            <h3 className='font-medium text-[22px] max-2xl:text-[18px] whitespace-nowrap'>Subscribe to Newsletter</h3>
            <form className='rounded-[12px] bg-(--color-dark-10) px-[24px] py-[18px] max-2xl:px-[20px] max-2xl:py-[14px]  flex justify-between '>
              <input type="email" placeholder="Your Email" className="flex-grow" />
              <button type="submit"><img src={arrow} alt="" /></button>
            </form>
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
    </>
  )
}
