import ReusableSection from "../components/ReusableSection";
import {
  sectionData,
  sectionData1,
  sectionData2,
  sectionData3,
  sectionData4
}from "../components/data/ReusableSectionData"



function Home() {
  return (
    <div className='flex justify-center  flex-col pl-[168px] pr-[168px] max-2xl:pl-[80px] max-2xl:pr-[80px] max-lg:pl-[14px] max-lg:pr-[14px]'>

      {/* forSection1  */}
       <ReusableSection
    {...sectionData1}
/>



 {/* forSection2  */}
       <ReusableSection
    {...sectionData2}
/>


 {/* forSection3  */}

       <ReusableSection
    {...sectionData}
/>




 {/* forSection4  */}
 
       <ReusableSection
    {...sectionData3}
/>

  {/* forSection5  */}

       <ReusableSection
    {...sectionData4}
/>


    </div>

  )
}

export default Home