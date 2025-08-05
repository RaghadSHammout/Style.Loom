//  export enum ShowImageType {
//   one = "one" , 
//   two = "two" , 
//   three = "three"
// }
// export interface cards {
//   img ?: string,
//   img2 ? : string,
//   title : string,
//   description : string,
//   showimage : ShowImageType ,
//   steps ? : string
// }
// function Cards({img , img2 , title , description , showimage , steps} :cards ) {
//   return (
//     <div className={`border-2 border-dashed border-dark-15  w-full 
//      ${showimage ? ShowImageType.one == "one" 'p-[30px] sm:p-[50px] 2xl:p-[60px] sm:w-[29.6298611%] 2xl:w-[27.708333%] overflow-hidden' : 'p-[30px] sm:p-10 2xl:p-[50px] sm:w-[22.2222%] 2xl:w-[20.78125%] '}`}>
//       {showimage == showimagetype.one &&
//        <div className="flex relative">
//         {showimage && <img src={img} alt="" className="mb-6 sm:mb-10 2xl:mb-[50px] " />}
//         {showimage && <img src={img2} alt="" className="absolute right-[-30px] sm:right-[-50px] 2xl:right-[-60px] top-[-30px] sm:top-[-67px] 2xl:top-[-60px] sm:w-[150px] sm:h-[166px]"/>}
//       </div>
//       }
//      {
//       howimage === ShowImageType.Two && 
//       <p className="font-normal font-robotmono text-[16px] sm:text-lg 2xl:text-xl text-gray-40 mb-5 sm:mb-6 2xl:mb-[30px]">{steps}</p>
//      }
//       <h3 className= {`font-roboto font-medium text-white mb-2.5 sm:mb-3 2xl:mb-[16px] leading-[150%] ${showimage === ShowImageType.Two ? 'text-lg sm:text-xl 2xl:text-2xl' : ''}`}>{title}</h3>
//       <p className="font-roboto font-normal text-sm sm:text-[16px] 2xl:text-lg text-gray-50" >{description}</p>
//     </div>
//   )
// }

// export default Cards

export enum ShowImageType {
  one = "one",
  two = "two",
  three = "three",
}

export interface CardsProps {
  img?: string;
  img2?: string;
  title: string;
  description: string;
  showimage: ShowImageType;
  steps?: string;
}

function Cards({ img, img2, title, description, showimage, steps }: CardsProps) {
  return (
    <div
      className={`border-2 border-dashed border-dark-15 w-full 
      ${showimage === ShowImageType.one? "p-[30px] sm:p-[50px] 2xl:p-[60px] sm:w-[29.6298611%] 2xl:w-[27.708333%] overflow-hidden": ""}
      ${showimage === ShowImageType.two ? 'p-[30px] sm:p-10  2xl:p-[50px] sm:w-[22.2222%]  2xl:w-[20.78125%]' : ''}
      ${showimage === ShowImageType.three ? 'flex items-center gap-x-5 p-5 sm:p-[30px] 2xl:p-10 sm:w-[29.6298611%]  2xl:w-[27.708333%] ' : ''}`}
    >

      <div className="flex relative">
          {(showimage === ShowImageType.one || showimage === ShowImageType.three) &&
        <img src={img} alt="icon" className="mb-6 sm:mb-10 2xl:mb-[50px] w-[76px] h-[76px] 2xl:w-[94px] 2xl:h-[94px]" />}
      {showimage === ShowImageType.one && 
        <img
              src={img2}
              alt=""
              className="absolute right-[-30px] sm:right-[-50px] 2xl:right-[-60px] top-[-30px] sm:top-[-67px] 2xl:top-[-60px] w-[166px] h-[166px] 2xl:w-[205px] 2xl:h-[205px]"
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
          className={`font-roboto font-medium text-white mb-2.5 sm:mb-3 2xl:mb-[16px] leading-[150%] ${
           ( showimage === ShowImageType.one || showimage === ShowImageType.three) ? 'text-lg sm:text-xl 2xl:text-2xl ' : ""}
           ${showimage === ShowImageType.two ? 'text-xl sm:text-[22px] 2xl:text-[28px]' : ''}`}
        >
          {title}
        </h3>
        <p className="font-roboto font-normal text-sm sm:text-[16px] 2xl:text-lg text-gray-50 leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Cards;
