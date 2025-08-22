import { useDispatch, useSelector } from "react-redux";
import ReusableSection from "../components/ReusableSection"
import { ProductTabsData } from "../data/FilterTabsData";
import { SectionDataProducts } from "../data/ReusableSectionData";
import type { RootState } from "../redux/store";
import type { FilterType } from "../types";
import { setFilteredSections } from "../redux/slices/productSlice";
import { useEffect } from "react";
import ProductsContainer from "../components/ProductsContainer";



function Products() {
  const dispatch = useDispatch();

  const activeTab = useSelector((state: RootState) => state.product.activeTypeForSections);
  const sections = useSelector((state: RootState) => state.product.filteredSections);

  const handleTabChange = (tab: FilterType) => {
    dispatch(setFilteredSections(tab));
  };

  useEffect(() => {
    dispatch(setFilteredSections(activeTab));
  }, [dispatch]);

  const ProductsSection = {
    ...SectionDataProducts,
    tabs: ProductTabsData,
    activeTab,
    onChange: handleTabChange,
    showTabs: true,
  };

  return (

<div className="pt-[223px] max-lg:pt-[185px] max-md:pt-[166px] pb-[100px] max-lg:pb-[80px] max-md:pb-[50px] 2xl:px-[162px] lg:px-[80px] px-[16px]">
      <ReusableSection {...ProductsSection}>
        {sections.map((section) => (
          <ProductsContainer
            key={section.category}
            category={section.category}
            products={section.products}
          />
        ))}

      </ReusableSection>
    </div>
  )
}

export default Products