interface CardContact {
    img: string,
    img2: string
    title : string , 
    btn : string,
    index : number
}
function CardContact({img , img2 , title , btn , index} : CardContact) {
  return (
    <div className={`p-[30px] sm:p-[50px] 2xl:p-[60px] relative  sm:w-[33.33359375%] 2xl:w-[33.333333%] w-full flex flex-col items-center justify-center overflow-hidden
    ${index === 1 || index === 2 ? 'sm:border-r-2 sm:border-b-0 border-b-2  border-dashed border-dark-15 ' : ''}`}>
        <div className="flex items-center">
            <img src={img} alt="" className="mb-6 sm:mb-10 2xl:mb-[50px]" />
            <img src={img2} alt="" className="absolute 2xl:top-0 2xl:right-0 sm:top-[-20px] sm:right-0 sm:w-[130px] top-0 right-0 w-[100px] 2xl:w-[145px] " />
        </div>
        <h4 className="font-roboto font-medium leading-[150%] 2x:text-2xl sm:text-xl text-lg mb-2.5 sm:mb-3.5 2xl:mb-4">{title}</h4>
        <button
        className="font-roboto font-normal text-sm 2xl:text-lg leading-[150%] relative  text-white border border-dashed border-Very-Dark-Gray bg-dark-12 w-full py-3.5 2xl:py-[18px] rounded-lg 2xl:rounded-xl">{btn}
            <span className="absolute w-[16.5px] h-[16.5px] border-t border-l border-[#AE9B84] rounded-tl-lg -top-0 -left-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-t border-r border-[#AE9B84] rounded-tr-lg -top-0 -right-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-b border-l border-[#AE9B84] rounded-bl-lg -bottom-0 -left-0" />
            <span className="absolute w-[16.5px] h-[16.5px] border-b border-r border-[#AE9B84] rounded-br-lg -bottom-0 -right-0" />
        </button>
    </div>
  )
}

export default CardContact
