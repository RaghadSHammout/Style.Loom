import{j as e,m as p}from"./index-5P1SrYCb.js";var o=(d=>(d.one="one",d.two="two",d.three="three",d))(o||{});function c({img:d,img2:l,title:b,description:x,showimage:t,steps:s,index:r,className:a}){return e.jsxs(p.div,{initial:{opacity:0,scale:.95,y:20},whileInView:{opacity:1,scale:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.8,ease:"easeOut"},className:`  hover:translate-1.5 hover:shadow-xl/30 cursor-pointer
        ${a}
      ${t===o.one?"p-[30px] sm:p-[50px] 2xl:p-[60px]  overflow-hidden":""}
      ${t===o.two?"p-[30px] sm:p-10  2xl:p-[50px] ":""}
      ${t===o.three?"flex items-center gap-x-5 p-5 sm:p-[30px] 2xl:p-10 ":""}
      ${t===o.one&&r!==void 0&&r<3?" xl:border-b-2  border-dashed border-dark-15":""}
      ${t===o.one&&r!==void 0&&r<4?" md:border-b-2 xl:border-b-0 border-dashed border-dark-15":""}
      ${t===o.one&&r!==void 0&&r<5?" border-b-2 md:border-b-0 border-dashed border-dark-15":""}
      ${t===o.one&&r!==void 0&&(r===1||r===3||r===5)?"md:border-l-2 xl:border-l-0 border-dashed border-dark-15 ":""}
      ${t===o.one&&r!==void 0&&(r===1||r===2||r===4||r===5)?"xl:border-l-2  border-dashed border-dark-15 ":""}
      ${t===o.two&&r!==void 0&&(r===1||r===2||r===3)?"xl:border-l-2 border-dashed border-dark-15 ":""}
      ${t===o.two&&r!==void 0&&r<3?" border-b-2 md:border-b-0 border-dashed border-dark-15":""}
      ${t===o.two&&r!==void 0&&(r===1||r===3)?" md:border-l-2 xl:border-l-0 border-dashed border-dark-15":""}
      ${t===o.two&&r!==void 0&&(r===0||r===1)?" md:border-b-2 xl:border-b-0 border-dashed border-dark-15":""}
      ${t===o.three&&r!==void 0&&(r===0||r===1)?"sm:border-r-2 border-b-2 xl:border-b-0 border-dashed border-dark-15 ":""}
      `,children:[e.jsxs("div",{className:"flex relative",children:[(t===o.one||t===o.three)&&e.jsx("img",{src:d,alt:"icon",className:"mb-6 sm:mb-10 2xl:mb-[50px] w-[76px] h-[76px] 2xl:w-[94px] 2xl:h-[94px]"}),t===o.one&&e.jsx("img",{src:l,alt:"background image",className:"absolute right-[-30px] sm:right-[-50px] 2xl:right-[-60px] top-[-57px] sm:top-[-67px] 2xl:top-[-60px] w-[184px]"})]}),e.jsxs("div",{children:[t===o.two&&e.jsx("p",{className:"font-normal font-robotmono text-[16px] sm:text-lg 2xl:text-xl text-gray-40 mb-5 sm:mb-6 2xl:mb-[30px]",children:s}),e.jsx("h3",{className:`font-roboto font-medium dark:text-white text-primarybg mb-2.5 sm:mb-3 2xl:mb-[16px] leading-[150%] ${t===o.one||t===o.three?"text-lg sm:text-xl 2xl:text-2xl ":""}

            ${t===o.two?"text-xl sm:text-[22px] 2xl:text-[28px]":""}`,children:b}),e.jsx("p",{className:"font-roboto font-normal text-sm sm:text-[16px] 2xl:text-lg text-gray-50 leading-[150%]",children:x})]})]})}export{c as C,o as S};
