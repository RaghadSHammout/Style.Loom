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

    <div className="p-[16px] md:p[80px] 2xl:p-[162px] ">
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