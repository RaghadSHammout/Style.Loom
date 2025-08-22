import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ReusableSection from "../components/ReusableSection";
import ProductsContainer from "../components/ProductsContainer";
import TestmonialsCards from "../components/TestmonialsCards";
import QuestionsCards from "../components/QuestionsCards";

import { ProductTabsData, tabsFaq } from "../data/FilterTabsData";
import { SectionDataProducts, sectionData3, baseFaqData } from "../data/ReusableSectionData";

import { setFilteredSections } from "../redux/slices/productSlice";
import { setActiveTab } from "../redux/questions"; 

import type { RootState } from "../redux/store";
import type { FilterType, FilterFaqType } from "../types";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

function Products() {
  const dispatch = useDispatch();
  const faqDispatch = useDispatch();

  
  const productActiveTab = useSelector(
    (state: RootState) => state.product.activeTypeForSections
  );
  const sections = useSelector(
    (state: RootState) => state.product.filteredSections
  );

  const handleTabChange = (tab: FilterType) => {
    dispatch(setFilteredSections(tab));
  };

  useEffect(() => {
    dispatch(setFilteredSections(productActiveTab));
  }, [dispatch, productActiveTab]);

  const productsSection = {
    ...SectionDataProducts,
    tabs: ProductTabsData,
    activeTab: productActiveTab,
    onChange: handleTabChange,
    showTabs: true,
  };

  
  const faqActiveTab = useSelector((state: RootState) => state.faq.activeTab);
  const filteredFaqs = useSelector((state: RootState) => state.faq.filteredFaqs);

  const faqSection = {
    ...baseFaqData,
    tabs: tabsFaq,
    activeTab: faqActiveTab,
    onChange: (tab: FilterFaqType) => faqDispatch(setActiveTab(tab)),
  };

  return (
     <PageTransitionWrapper>
      <div className="pt-[223px] max-lg:pt-[185px] max-md:pt-[166px] pb-[100px] max-lg:pb-[80px] max-md:pb-[50px] 2xl:px-[162px] lg:px-[80px] px-[16px]">
      <ReusableSection {...productsSection}>
        {sections.map((section) => (
          <ProductsContainer
            key={section.category}
            category={section.category}
            products={section.products}
          />
        ))}
      </ReusableSection>

      <ReusableSection {...sectionData3}>
        <TestmonialsCards />
      </ReusableSection>

      <ReusableSection {...faqSection}>
        <QuestionsCards filteredFaqs={filteredFaqs} />
      </ReusableSection>
    </div>
     </PageTransitionWrapper>
    
  );
}

export default Products;
