interface CallToActionProps {
  heading: string;
  text: string;
  image: string;
  alt: string;

}
function CallToAction({ heading, text, image, alt }: CallToActionProps) {
  return (
    <div className="relative overflow-hidden bg-brown-70  flex items-center justify-between gap-[150px] rotate-0 opacity-100  rounded-[20px]  py-[100px] pr-[142px] pl-[100px] 
   max-2xl:rounded-[16px] 
  max-2xl:pr-[120px] 
  max-2xl:pl-[80px]
  max-2xl:py-[80px]
  max-lg:rounded-[16px] 
  max-lg:px-[30px] 
  max-lg:py-[50px] 
  max-lg:gap-[30px]
  max-md:flex-col ">
      <div className="font-roboto flex flex-col gap-4 z-10  max-2xl:gap-3">
      <h2 className=" text-primarybg font-medium  text-[58px] leading-[120%] tracking-[0%] uppercase max-2xl:text-[48px] max-lg:text-[38px]">{heading}</h2>
      <p className="text-dark-12 font-normal text-lg leading-[150%] tracking-[0%]   max-2xl:text-base  max-sm:text-sm">{text}</p>
      </div>
      <button className="w-[136px] h-[63px]  z-10  bg-amber-300"></button>
      <div
        className={`absolute right-0 top-0 bottom-0  z-0 max-sm:right-[-90px] `}
      >
        <img src={image} alt={alt} className={` overflow-hidden max-2xl:w-[510px] max-sm:w-[280px] `} />
      </div>

    </div>
  )
}

export default CallToAction